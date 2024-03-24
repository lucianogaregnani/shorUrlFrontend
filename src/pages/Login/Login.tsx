/* eslint-disable react-hooks/exhaustive-deps */
import Form from "../../components/Form/Form";
import { authApi } from "../../services/authApi";
import { HandleSubmitParams } from "../../types/Form.type";



function Login() {
  const handleSubmit = async ({ email, password }: HandleSubmitParams) => {
    const { token } = await authApi.login({ email, password });
    console.log(token);
  };

  return <Form type="login" handleSubmit={handleSubmit} />;
}

export default Login;
