import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  const currentDate = new Date();

  return <Calendar date={currentDate} />;
}

export default App;
