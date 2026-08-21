import { CONTACT_EMAIL } from "@/lib/mailto";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <span className="text-lg font-semibold text-white">Bitely</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-zinc-300 hover:text-white"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-2 text-xs text-zinc-500">
          © 2026 Bitely · Impressum & Datenschutz folgt
        </p>
      </div>
    </footer>
  );
}
