import Card from "../components/Card";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <Card title="Card 1" desc="Desc 1" />
        <Card title="Card 2" desc="Desc 2" />
        <Card title="Card 3" desc="Desc 3" />
      </div>
    </div>
  );
}

export default App;
