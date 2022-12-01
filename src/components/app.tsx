import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Layout />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
