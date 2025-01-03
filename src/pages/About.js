import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 80px 2rem 2rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const Section = styled(motion.div)`
  margin-bottom: 2rem;
`;

function About() {
  return (
    <AboutContainer>
      <Content>
        <Title
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About TechSpark
        </Title>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>
            TechSpark is dedicated to fostering innovation and technological advancement
            through collaboration, education, and cutting-edge solutions.
          </p>
        </Section>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Our Vision</h2>
          <p>
            We envision a future where technology enhances every aspect of human life,
            making the world more connected, efficient, and sustainable.
          </p>
        </Section>
      </Content>
    </AboutContainer>
  );
}

export default About; 