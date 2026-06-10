type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className = ""
}: SectionHeaderProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const textColor = tone === "dark" ? "text-white/66" : "text-ink/62";

  return (
    <div
      className={`mx-auto max-w-4xl ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-champagne">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-[1.08] sm:text-4xl md:text-5xl lg:text-[4.25rem] ${titleColor}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mx-auto mt-5 max-w-2xl text-[15px] leading-7 sm:text-base lg:mt-6 lg:text-lg lg:leading-8 ${textColor}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
