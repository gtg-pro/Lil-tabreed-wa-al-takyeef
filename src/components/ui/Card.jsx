export default function Card({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-primary/60 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
