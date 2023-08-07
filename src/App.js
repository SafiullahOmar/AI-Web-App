import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


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
