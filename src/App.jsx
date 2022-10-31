import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { MainContainer } from "@/pages/MainContainer";
import { Login } from "@/pages/Login";

const _LOGGED_CONTEXT = "LOGGED";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" index element={<Login />} />
        <Route
          exact
          path="/"
          element={<ConditionalRoute content={_LOGGED_CONTEXT} />}
        >
          <Route exact path="/" element={<MainContainer />}>
            <Route path="" element={<span>dashboard</span>} />
            <Route path="create" element={<span>create</span>} />
            <Route path="update" element={<span>update</span>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

function ConditionalRoute({ content }) {
  // GET VALUE LOCALSTORAGE credentials
  const credential = localStorage.getItem("medigital.admin:credential");
  if (content === "LOGGED") {
    return credential ? <Outlet /> : <Navigate to="/login" replace />;
  }
  return null;
}

export default App;