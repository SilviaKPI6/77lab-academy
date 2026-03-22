"use client";

import { getModuloById, getFaseById, fasi, moduli } from "@/data/course-data";

const STORAGE_KEY = "77lab-academy-progress";

function getCompleted(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function saveCompleted(completed: Set<string>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

export function markLessonComplete(lezioneId: string): void {
  const completed = getCompleted();
  completed.add(lezioneId);
  saveCompleted(completed);
}

export function markLessonIncomplete(lezioneId: string): void {
  const completed = getCompleted();
  completed.delete(lezioneId);
  saveCompleted(completed);
}

export function isLessonComplete(lezioneId: string): boolean {
  return getCompleted().has(lezioneId);
}

export function getModuleProgress(moduloId: string): { completed: number; total: number } {
  const modulo = getModuloById(moduloId);
  if (!modulo) return { completed: 0, total: 0 };
  const completed = getCompleted();
  const done = modulo.lezioni.filter((id) => completed.has(id)).length;
  return { completed: done, total: modulo.lezioni.length };
}

export function getFaseProgress(faseId: string): { completed: number; total: number } {
  const fase = getFaseById(faseId);
  if (!fase) return { completed: 0, total: 0 };
  const completed = getCompleted();
  let total = 0;
  let done = 0;
  for (const moduloId of fase.moduli) {
    const modulo = getModuloById(moduloId);
    if (modulo) {
      total += modulo.lezioni.length;
      done += modulo.lezioni.filter((id) => completed.has(id)).length;
    }
  }
  return { completed: done, total };
}

export function getOverallProgress(): { completed: number; total: number } {
  const completed = getCompleted();
  let total = 0;
  let done = 0;
  for (const fase of Object.values(fasi)) {
    for (const moduloId of fase.moduli) {
      const modulo = moduli[moduloId];
      if (modulo) {
        total += modulo.lezioni.length;
        done += modulo.lezioni.filter((id) => completed.has(id)).length;
      }
    }
  }
  return { completed: done, total };
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
