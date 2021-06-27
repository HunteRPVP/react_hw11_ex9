import React, { useRef } from "react";
import "./App.css";
import FormSearch from "./components/FormSearch";

function App() {
  const formSearchRef = useRef(null);

  return (
    <div className="App">
      <FormSearch ref={formSearchRef} />
      <div>
        <button type="button" onClick={() => formSearchRef.current?.onSubmit()}>
          Отправить форму в родительском компоненте
        </button>
      </div>
    </div>
  );
}

export default App;
