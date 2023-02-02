import React, { useState } from "react";
import {
  Button,
  EyeIcon,
  EyeInvisibleIcon,
  FormRegister,
  Input,
  Label,
  Link,
  RegisterContainer,
  Main,
} from "./styled";

const Register = ({ handleScreen }) => {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const handleInputPhone = (event) => {
    setInputPhone(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };
  const handleInputConfirmPassword = (event) => {
    setInputConfirmPassword(event.target.value);
  };

  const [showPassword, SetShowPassword] = useState("password");
  const handleShowPassword = (type) => {
    SetShowPassword(type);
  };

  const [showConfirmPassword, SetShowConfirmPassword] = useState("password");
  const handleShowConfirmPassword = (type) => {
    SetShowConfirmPassword(type);
  };

  return (
    <Main>
      <RegisterContainer>
        <h1>Cadastre-se</h1>
        <p>Compre mais rápido e acompanhe seus pedidos em um só lugar!</p>
        <FormRegister>
          <Label htmlFor="name">
            <p>Nome completo:</p>
            <Input
              type="text"
              placeholder="Nome Sobrenome"
              id="name"
              required
              value={inputName}
              onChange={handleInputName}
            />
          </Label>
          <Label htmlFor="phone">
            <p>Telefone para contato:</p>
            <Input
              type="phone"
              placeholder="(00) 12345-6789"
              id="phone"
              required
              value={inputPhone}
              onChange={handleInputPhone}
            />
          </Label>
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
          <Label htmlFor="confirmPassword">
            <p>Confirmar senha:</p>
            {showConfirmPassword === "password" ? (
              <EyeIcon onClick={() => handleShowConfirmPassword("text")} />
            ) : (
              <EyeInvisibleIcon
                onClick={() => handleShowConfirmPassword("password")}
              />
            )}
            <Input
              type={showConfirmPassword}
              id="confirmPassword"
              value={inputConfirmPassword}
              onChange={handleInputConfirmPassword}
              required
            />
          </Label>
          <Link href="#">Esqueceu a senha?</Link>
          <Button type="submit">Cadastre-se</Button>
          <p>
            Já possui uma conta?{" "}
            <Link href="#" onClick={() => handleScreen(4)}>
              Iniciar sessão
            </Link>
          </p>
        </FormRegister>
      </RegisterContainer>
    </Main>
  );
};

export default Register;
