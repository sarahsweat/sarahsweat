import React, { useState } from "react";
import { formatPhoneNumber } from "./formatPhoneNumber";
import styled from "styled-components";
import { BodyText, SectionHeading } from "../../atoms";

const ContactForm = ({ title }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handlePhoneNumberInput = (e) => {
    // read in input
    const formatted = formatPhoneNumber(e.target.value);
    // set phone number
    setPhoneNumber(formatted);
  };

  return (
    <Wrapper>
      <SectionHeading>{title}</SectionHeading>
      <form onSubmit={handOnSubmit}>
        <label>
          <BodyText>Name</BodyText>
          <input type="text" value={name} onChange={handleNameInput} />
        </label>
        <br />
        <label>
          <BodyText>Phone Number</BodyText>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberInput}
          />
        </label>
        <br />
        <br />
        <SubmitButton type="submit" value="Submit" />
      </form>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  width: 80%;
  background-color: ${(p) => p.theme.colors.white};
  padding: 20px;
  box-shadow: 1px 1px 1px ${(p) => p.theme.colors.primary};
  border-radius: 3px;
  margin: 10px 20px;
  @media (min-width: 768px) {
    width: 60%;
    box-shadow: 1px 1px 3px ${(p) => p.theme.colors.primary};
  }
`;

const SubmitButton = styled.input`
  background-color: ${(p) => p.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
`;
