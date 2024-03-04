import "./App.css";

function App() {
  console.log("ok env variable:", import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h2>Mega Block app with appwrite</h2>
    </>
  );
}

export default App;
