// Component badge/label kecil generik.

export default function Badge({ children, ...props }) {
  return (
    <span {...props}>
      {children}
    </span>
  );
}
