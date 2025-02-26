import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 50px 20px;
`;

const HeroSection = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  color: #222;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const StyledButton = styled.a`
  display: inline-block;
  background-color: #0070f3;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Navigation = styled.nav`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 18px;
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Better.com Clone - Home</title>
      </Head>

      <HeroSection>
        <Title>Buying a home should be better</Title>
        <Subtitle>Get a fast, transparent mortgage experience with zero commission.</Subtitle>

        <ButtonContainer>
          <Link href="/start" passHref>
            <StyledButton>Get Started</StyledButton>
          </Link>
          <Link href="/mortgage-calculator" passHref>
            <StyledButton>Calculate Mortgage</StyledButton>
          </Link>
        </ButtonContainer>
      </HeroSection>

      <Navigation>
        <Link href="/about-us" passHref>
          <NavLink>About Us</NavLink>
        </Link>
        <Link href="/mortgage-calculator" passHref>
          <NavLink>Mortgage Calculator</NavLink>
        </Link>
        <Link href="/start" passHref>
          <NavLink>Start</NavLink>
        </Link>
      </Navigation>
    </Container>
  );
}
