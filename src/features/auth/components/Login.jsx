import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import FormRowVertical from "../../../components/FormRowVertical";
import Input from "../../../components/Input";
import Row from "../../../components/Row";

function Login() {
  return (
    <Row direction="column">
      <FormRowVertical label="Email address">
        <Input type="email" id="email" />
      </FormRowVertical>
      <FormRowVertical
        label="Password"
        subLabel={<Link className="text-primary">I forgot Password</Link>}
      >
        <Input type="password" id="password" />
      </FormRowVertical>
      <FormRowVertical>
        <Button>Sign In</Button>
      </FormRowVertical>
    </Row>
  );
}

export default Login;
