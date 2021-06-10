import { lazy, Suspense } from "react";

const AsyncPage = lazy(() => import("./AsyncPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <AsyncPage />
      </Suspense>
      <button
        onClick={() => {
          window.history.replaceState(null, null, "/subapp2");
        }}
      >
        To Subapp2
      </button>
    </div>
  );
}

export default App;
