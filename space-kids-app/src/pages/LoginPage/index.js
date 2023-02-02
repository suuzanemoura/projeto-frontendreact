import React, { useState } from "react";
import {
  Button,
  EyeIcon,
  EyeInvisibleIcon,
  FormLogin,
  Input,
  Label,
  Link,
  LoginContainer,
  Main,
} from "./styled";

const Login = ({ handleScreen }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const [showPassword, SetShowPassword] = useState("password");
  const handleShowPassword = (type) => {
    SetShowPassword(type);
  };

  return (
    <Main>
      <LoginContainer>
        <h1>Iniciar sessão</h1>
        <FormLogin>
          <Label htmlFor="email">
            <p>Email:</p>
            <Input
              type="email"
              placeholder="seunome@email.com.br"
              id="email"
              required
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </Label>
          <Label htmlFor="password">
            <p>Senha:</p>
            {showPassword === "password" ? (
              <EyeIcon onClick={() => handleShowPassword("text")} />
            ) : (
              <EyeInvisibleIcon
                onClick={() => handleShowPassword("password")}
              />
            )}
            <Input
              type={showPassword}
              id="password"
              value={inputPassword}
              onChange={handleInputPassword}
              required
            />
          </Label>
          <Link href="#">Esqueceu a senha?</Link>
          <Button type="submit">Iniciar sessão</Button>
          <p>
            Não possui uma conta ainda?{" "}
            <Link href="#" onClick={() => handleScreen(5)}>
              Cadastre-se
            </Link>
          </p>
        </FormLogin>
      </LoginContainer>
    </Main>
  );
};

export default Login;
