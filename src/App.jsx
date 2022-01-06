import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="container rounded-lg bg-white p-4 col-12">
      <Counter />
    </div>
  );
};

export default App;
