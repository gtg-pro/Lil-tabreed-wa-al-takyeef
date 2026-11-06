export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  id,
}) {
  const alignClass =
    align === "left" ? "text-start items-start" : "text-center items-center";

  return (
    <div
      className={`mb-10 flex flex-col gap-3 sm:mb-12 ${alignClass}`}
      data-aos="fade-up"
    >
      <div
        className={`h-1 w-10 rounded-full bg-primary ${
          align === "left" ? "" : "mx-auto"
        }`}
        aria-hidden="true"
      />
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
