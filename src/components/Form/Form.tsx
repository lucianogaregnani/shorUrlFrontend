import { FormEvent, useState } from "react";
import { FormProps } from "../../types/Form.type";
import Input from "./Input";
import FormLayout from "./FormLayout";

function Form({ type, handleSubmit }: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "login") {
      handleSubmit({ email, password });
    } else {
      handleSubmit({ email, password, repassword });
    }
  };

  return (
    <FormLayout>
      <form
        className="text-xl max-w-md border-2 px-20 rounded-2xl py-12 border-slate-200 bg-white flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        <Input
          labelText="Email"
          placeholder="name@gmail.com"
          value={email}
          type="text"
          onChange={setEmail}
        />
        <Input
          labelText="Password"
          placeholder="your password"
          value={password}
          type="password"
          onChange={setPassword}
        />
        {type === "register" && (
          <label className="flex flex-col">
            <Input
              labelText="Repassword"
              placeholder="repassword"
              value={repassword}
              type="password"
              onChange={setRepassword}
            />
          </label>
        )}
        <button className="bg-green-500 hover:bg-green-600 transition-all text-white font-semibold p-2 rounded-2xl w-full">
          Submit
        </button>
      </form>
    </FormLayout>
  );
}

export default Form;
