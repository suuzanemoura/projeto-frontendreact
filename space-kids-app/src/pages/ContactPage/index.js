import React, { useState } from "react";
import {
  Button,
  FormContact,
  Input,
  Label,
  ContactContainer,
  Main,
  TextArea,
} from "./styled";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const handleInputPhone = (event) => {
    setInputPhone(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleInputMessage = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <Main>
      <ContactContainer>
        <h1>Entre em contato</h1>

        <FormContact>
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
          <Label htmlFor="message">
            <p>Mensagem:</p>
            <TextArea
              id="message"
              autocorrect="off"
              autocapitalize="off"
              name="message"
              rows="7"
              value={inputMessage}
              onChange={handleInputMessage}
            />
          </Label>
          <Button type="submit">Enviar</Button>
        </FormContact>
      </ContactContainer>
    </Main>
  );
};

export default Contact;
