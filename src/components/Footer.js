import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 3rem 2rem;
  margin-top: 4rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Section = styled.div`
  h3 {
    color: #00ff88;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #00ff88;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #666;
`;

function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Section>
          <h3>TechSpark</h3>
          <p>Igniting Innovation and Transforming Technology</p>
        </Section>
        <Section>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </Section>
        <Section>
          <h3>Contact</h3>
          <ul>
            <li>Email: info@techspark.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Tech Street</li>
          </ul>
        </Section>
        <Section>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </Section>
      </Content>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} TechSpark. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 