import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/homepage";
import Auth from "./pages/auth/auth";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
