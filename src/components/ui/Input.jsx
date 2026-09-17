// Component input generik dengan label opsional.

export default function Input({ label, id, ...props }) {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} {...props} />
    </div>
  );
}
