import { missions, vision } from "../data/visi-misi";

// TODO (PAGE-003): sesuaikan styling dan tambahkan elemen visual sesuai Figma.

export default function VisiMisiContent() {
  return (
    <div>
      <section>
        <h2>Visi</h2>
        <p>{vision}</p>
      </section>
      <section>
        <h2>Misi</h2>
        <ul>
          {missions.map((mission) => (
            <li key={mission}>{mission}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
