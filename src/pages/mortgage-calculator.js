import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #0070f3;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #555;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin-top: 15px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Slider = styled.input`
  width: 100%;
  margin-top: 5px;
`;

const Output = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0070f3;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(265);
  const [zip, setZip] = useState("421005");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm, propertyTax]);

  const calculateMortgage = () => {
    const principal = loanAmount;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPrincipalInterest =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    const totalMonthlyPayment =
      monthlyPrincipalInterest + propertyTax / 12;

    setMonthlyPayment(totalMonthlyPayment.toFixed(2));
  };

  return (
    <Container>
      <Head>
        <title>Mortgage Calculator - Better.com Clone</title>
      </Head>
      <Title>Mortgage Calculator</Title>
      <Subtitle>Estimate your monthly mortgage payment</Subtitle>

      {/* Loan Amount Slider */}
      <Label>Loan Amount: ${loanAmount.toLocaleString()}</Label>
      <Slider
        type="range"
        min="50000"
        max="1000000"
        step="5000"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
      />

      {/* Interest Rate Slider */}
      <Label>Interest Rate: {interestRate}%</Label>
      <Slider
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
      />

      {/* Loan Term Slider */}
      <Label>Loan Term: {loanTerm} Years</Label>
      <Slider
        type="range"
        min="5"
        max="30"
        step="5"
        value={loanTerm}
        onChange={(e) => setLoanTerm(Number(e.target.value))}
      />

      {/* Property Tax Input */}
      <Label>Property Tax (Yearly, $)</Label>
      <Input
        type="number"
        value={propertyTax}
        onChange={(e) => setPropertyTax(Number(e.target.value))}
      />

      {/* ZIP Code Input */}
      <Label>ZIP Code</Label>
      <Input
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />

      {/* Display Monthly Payment */}
      <Output>Estimated Monthly Payment: ${monthlyPayment}</Output>

      <Button onClick={calculateMortgage}>Recalculate</Button>
    </Container>
  );
}
