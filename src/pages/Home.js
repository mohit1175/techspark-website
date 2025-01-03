import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 80px 2rem 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
`;

const Hero = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const LogoBackground = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  opacity: 0.05;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #333;
  max-width: 600px;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <LogoBackground
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <img src="/techspark-logo.png" alt="TechSpark Logo Background" />
        </LogoBackground>
        <Content>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to TechSpark
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Innovation Through Technology
          </Subtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </Content>
      </Hero>
    </HomeContainer>
  );
}

export default Home;