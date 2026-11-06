export default function Card({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-lg border border-border bg-surface p-5 transition-shadow duration-300 hover:border-primary/80 hover:shadow-[0_0_24px_rgba(225,29,46,0.25)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
