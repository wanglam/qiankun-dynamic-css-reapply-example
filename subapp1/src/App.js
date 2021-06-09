import { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

const AsyncComponent = lazy(() => import("./AsyncComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<div>Loading....</div>}>
          <AsyncComponent />
        </Suspense>
        <button
          onClick={() => {
            window.history.replaceState(null, null, "/subapp2");
          }}
        >
          To Subapp2
        </button>
      </header>
    </div>
  );
}

export default App;
