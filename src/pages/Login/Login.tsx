/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useAuth from "../../hooks/useAuth";
import { HandleSubmitParams } from "../../types/Form.type";
import ErrorLayout from "../../components/ErrorLayout";
import LoadingLayout from "../../components/LoadingLayout";
import { useEffect } from "react";

function Login() {
  const { login, isLoading, error, changeError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleSubmit = async ({ email, password }: HandleSubmitParams) => {
    await login({ email, password });
    navigate("/");
  };

  return (
    <ErrorLayout error={error} changeError={changeError}>
      <LoadingLayout isLoading={isLoading}>
        <Form type="login" handleSubmit={handleSubmit} />
      </LoadingLayout>
    </ErrorLayout>
  );
}

export default Login;
