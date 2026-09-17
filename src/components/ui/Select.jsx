// Component select generik.
// `options` berupa array { value, label }.

export default function Select({ label, id, options = [], ...props }) {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select id={id} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
