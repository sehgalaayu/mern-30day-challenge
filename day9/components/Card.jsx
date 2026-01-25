export default function Card({ title, desc }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
      }}
    >
      <h3 style={{ margin: "0 0 6px 0" }}>{title}</h3>
      <p style={{ margin: 0 }}>{desc}</p>
    </div>
  );
}
