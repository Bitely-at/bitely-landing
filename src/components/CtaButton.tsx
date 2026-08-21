import { CTA_MAILTO } from "@/lib/mailto";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "inverted";
  className?: string;
};

export default function CtaButton({
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-700"
      : "bg-white text-emerald-700 hover:bg-emerald-50 focus-visible:outline-white";

  return (
    <a href={CTA_MAILTO} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
