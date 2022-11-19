import logo from './logo.svg';
import "./App.css";
import {Header} from "./components/header/Header.js"
import {Main} from "./components/main/Main.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
