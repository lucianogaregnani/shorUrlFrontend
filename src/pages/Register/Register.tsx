import Form from "../../components/Form/Form";
import { HandleSubmitParams } from "../../types/Form.type";

function Register() {
  const handleSubmit = ({
    email,
    password,
    repassword,
  }: HandleSubmitParams) => {
    console.log({ email, password, repassword });
  };

  return <Form type="register" handleSubmit={handleSubmit} />;
}

export default Register;
