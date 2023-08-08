import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";



function App() {
  return (
    <BrowserRouter>
      <div className="container fluid">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
