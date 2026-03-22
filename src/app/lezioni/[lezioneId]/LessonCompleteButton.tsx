"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { markLessonComplete, markLessonIncomplete, isLessonComplete } from "@/lib/progress";

interface LessonCompleteButtonProps {
  lezioneId: string;
}

export default function LessonCompleteButton({ lezioneId }: LessonCompleteButtonProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(isLessonComplete(lezioneId));
  }, [lezioneId]);

  const toggle = () => {
    if (completed) {
      markLessonIncomplete(lezioneId);
      setCompleted(false);
    } else {
      markLessonComplete(lezioneId);
      setCompleted(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
        completed
          ? "bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30"
          : "bg-indigo-600 text-white hover:bg-indigo-500"
      }`}
    >
      {completed ? (
        <>
          <CheckCircle2 className="w-4 h-4" />
          Completata
        </>
      ) : (
        <>
          <Circle className="w-4 h-4" />
          Segna come completata
        </>
      )}
    </button>
  );
}
