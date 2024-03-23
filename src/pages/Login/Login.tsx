import Form from "../../components/Form/Form";
import { HandleSubmitParams } from "../../types/Form.type";

function Login() {
  const handleSubmit = ({ email, password }: HandleSubmitParams) => {
    console.log({ email, password });
  };

  return <Form type="login" handleSubmit={handleSubmit} />;
}

export default Login;
