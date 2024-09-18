function Button({
  children,
  onClick,
  className,
  color,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  color?: "primary" | "secondary" | "error";
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        color === "secondary"
          ? "bg-secondary"
          : color === "error"
          ? "bg-error"
          : "bg-blue-500"
      }  p-2 rounded-lg`}
    >
      {children}
    </button>
  );
}

export default Button;
