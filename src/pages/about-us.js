import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  color: #222;
  min-height: 100vh;
  padding: 50px 20px;
  text-align: center;
`;

const Header = styled.header`
  max-width: 900px;
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
  color: #555;
  margin-bottom: 30px;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Footer = styled.footer`
  margin-top: 50px;
  padding: 20px;
  background: #0070f3;
  color: white;
  font-size: 16px;
`;

export default function AboutUs() {
  return (
    <Container>
      <Head>
        <title>About Us - Better.com</title>
      </Head>

      <Header>
        <Title>About Better.com</Title>
        <Subtitle>Revolutionizing home buying with a seamless, transparent mortgage experience.</Subtitle>
      </Header>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Text>
          At Better.com, we believe homeownership should be fast, simple, and transparent. Our technology-driven approach
          eliminates unnecessary fees and inefficiencies, empowering buyers with better mortgage solutions.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <Text>
          We provide low rates, zero commissions, and a fully digital experience to help you secure the best mortgage.
          Our process is designed to be hassle-free, allowing you to get pre-approved in just a few minutes.
        </Text>
        <ImageContainer>
          <StyledImage src="/about-us.jpg" alt="Better.com Team" />
        </ImageContainer>
      </Section>

      <Footer>© 2025 Better.com | All Rights Reserved</Footer>
    </Container>
  );
}
