import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import FormRowVertical from "../../../components/FormRowVertical";
import Input from "../../../components/Input";
import Row from "../../../components/Row";
import { login } from "../authSlice";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmitLogin(data) {
    console.log(data, "submitted");
    console.log(login());
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <Row $direction="column">
        <FormRowVertical label="Email address" error={errors.email?.message}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Email address in required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical
          label="Password"
          subLabel={<Link className="text-primary">I forgot Password</Link>}
          error={errors.password?.message}
        >
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required.",
            })}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button type="submit" disabled={isSubmitting}>
            Sign In
          </Button>
        </FormRowVertical>
      </Row>
    </form>
  );
}

export default LoginForm;
