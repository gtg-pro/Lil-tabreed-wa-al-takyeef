"use client";

const variants = {
  primary:
    "bg-primary text-white neon-glow hover:bg-primary-hover focus-visible:outline-primary",
  secondary:
    "border border-border bg-surface text-white hover:border-primary hover:text-primary focus-visible:outline-primary",
  ghost:
    "text-muted hover:text-white focus-visible:outline-primary",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
