import MinistryStructure from "./MinistryStructure";

// Detail satu kementerian. Data diambil dari service di page (server component).

export default function MinistryDetail({ ministry }) {
  return (
    <article>
      <h1>{ministry.name}</h1>
      <p>{ministry.description}</p>
      <MinistryStructure members={ministry.structure} />
    </article>
  );
}
