import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import Projects from "./pages/Projects";
import AuthLayout from "./components/AuthLayout";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="projects" />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="authentication" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<Authentication type="login" />} />
            <Route
              path="register"
              element={<Authentication type="register" />}
            />
            <Route
              path="forgot-password"
              element={<Authentication type="forgot-password" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
