// Component textarea generik dengan label opsional.

export default function Textarea({ label, id, rows = 4, ...props }) {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea id={id} rows={rows} {...props} />
    </div>
  );
}
