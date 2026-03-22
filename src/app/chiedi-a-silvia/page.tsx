export const metadata = { title: "Chiedi a Silvia — 77LAB Academy" };

export default function ChiediASilviaPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-3">Chiedi a Silvia</h1>
        <p className="text-slate-400">
          Hai una domanda? Compila il form e ti rispondo personalmente.
        </p>
      </div>

      <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
        <iframe
          src="https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full"
          title="Chiedi a Silvia"
        >
          Caricamento…
        </iframe>
      </div>

      <p className="text-xs text-slate-600 text-center mt-4">
        Il form verrà aggiornato con il link reale a breve.
      </p>
    </div>
  );
}
