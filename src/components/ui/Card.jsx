// Component card generik. Isi bebas via children.
// TODO (COMP-005): tambahkan styling via CSS module.

export default function Card({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}
