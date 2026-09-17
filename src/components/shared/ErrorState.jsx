// State error untuk menampilkan pesan kegagalan (misalnya fetch API).

export default function ErrorState({ title = "Terjadi kesalahan", description }) {
  return (
    <div role="alert">
      <p>{title}</p>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
