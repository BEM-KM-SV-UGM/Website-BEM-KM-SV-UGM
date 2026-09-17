// State kosong untuk list/grid yang tidak memiliki data.

export default function EmptyState({ title = "Belum ada data", description }) {
  return (
    <div role="status">
      <p>{title}</p>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
