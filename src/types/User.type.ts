export interface User {
  email: string,
  password: string,
}

export interface UserRegister extends User {
  repassword: string
}