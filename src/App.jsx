import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import Projects from "./pages/Projects";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="projects" />} />
              <Route path="projects" element={<Projects />} />
            </Route>
            <Route path="auth" element={<AuthLayout />}>
              <Route index element={<Navigate to="login" replace />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<LoginPage />} />
              <Route path="forgot-password" element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
