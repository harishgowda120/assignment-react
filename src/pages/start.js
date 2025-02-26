import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Arial", sans-serif;
  background: linear-gradient(to bottom, #f9fafb, #e3eaf5);
  min-height: 100vh;
  padding: 50px 20px;
  text-align: center;
`;

const Header = styled.header`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #0070f3;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #444;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 25px;
  background: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: 0.3s;

  &:focus {
    border-color: #0070f3;
    outline: none;
    box-shadow: 0px 0px 8px rgba(0, 112, 243, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #0070f3;
  color: white;
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Footer = styled.footer`
  margin-top: 50px;
  padding: 20px;
  background: #0070f3;
  color: white;
  font-size: 16px;
`;

export default function Start() {
  return (
    <Container>
      <Head>
        <title>Get Started - Better.com</title>
      </Head>

      <Header>
        <Title>Let's Get You Started</Title>
        <Subtitle>Answer a few quick questions to begin your home-buying journey.</Subtitle>
      </Header>

      <FormContainer>
        <Label>Your Name</Label>
        <Input type="text" placeholder="Enter your name" />

        <Label>Email Address</Label>
        <Input type="email" placeholder="Enter your email" />

        <Label>Loan Amount ($)</Label>
        <Input type="number" placeholder="Enter loan amount" />

        <Button>Continue</Button>
      </FormContainer>

      <Footer>© 2025 Better.com | All Rights Reserved</Footer>
    </Container>
  );
}
