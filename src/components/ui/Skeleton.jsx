// Placeholder loading sederhana.
// TODO: tambahkan styling shimmer/skeleton sesuai desain.

export default function Skeleton({ className, ...props }) {
  return <div className={className} aria-hidden="true" {...props} />;
}
