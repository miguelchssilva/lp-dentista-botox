type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light"
}: SectionHeaderProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const textColor = tone === "dark" ? "text-white/68" : "text-ink/68";

  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-champagne">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${textColor}`}>{text}</p>
      ) : null}
    </div>
  );
}
