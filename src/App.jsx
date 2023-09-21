import "./App.css";
import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  return (
    <>
      <Header headerText="Temperature in Brussels" />
      <WeatherContainer />
    </>
  );
}

export default App;
