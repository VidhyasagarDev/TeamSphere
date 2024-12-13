import Login from "../features/auth/components/Login";

function Authentication({ type }) {
  return type === "login" ? <Login /> : null;
}

export default Authentication;
