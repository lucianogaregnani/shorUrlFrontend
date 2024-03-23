import { HTMLInputTypeAttribute } from "react";

export interface HandleSubmitParams {
  email: string;
  password: string;
  repassword?: string
}

export interface FormProps {
  type: "register" | "login";
  handleSubmit: ({ email, password, repassword }:HandleSubmitParams) => void;
}

export interface InputProps {
  labelText: string;
  value: string;
  onChange: (e: string) => void;
  placeholder?: string;
  type: HTMLInputTypeAttribute 
}
