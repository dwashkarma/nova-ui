function Button({
  children,
  onClick,
  color = "bg-slate-700",
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}) {
  return (
    <button onClick={onClick} className={`${color} text-white p-2 rounded-md `}>
      {children}
    </button>
  );
}

export default Button;
