export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  neon = true,
  id,
}) {
  const alignClass =
    align === "left" ? "text-start items-start" : "text-center items-center";

  return (
    <div className={`mb-10 flex flex-col gap-3 sm:mb-12 ${alignClass}`}>
      <h2
        id={id}
        className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl ${
          neon ? "neon-text" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
