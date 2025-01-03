import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const EventsContainer = styled.div`
  min-height: 100vh;
  padding: 80px 2rem 2rem;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #1a1a1a;
`;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventDate = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  
  h3 {
    font-size: 2rem;
    color: #1a1a1a;
  }
  
  p {
    color: #666;
  }
`;

const events = [
  {
    date: "25",
    month: "JUN",
    year: "2024",
    title: "Tech Innovation Summit",
    description: "Join us for a day of exploring cutting-edge technologies and networking with industry leaders.",
    location: "TechHub Conference Center"
  },
  {
    date: "15",
    month: "JUL",
    year: "2024",
    title: "Web Development Workshop",
    description: "Learn the latest web development technologies and best practices in this hands-on workshop.",
    location: "Virtual Event"
  },
  {
    date: "10",
    month: "AUG",
    year: "2024",
    title: "AI & Machine Learning Conference",
    description: "Discover the latest advances in AI and machine learning from leading experts.",
    location: "Innovation Center"
  }
];

function Events() {
  return (
    <EventsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </Title>
        {events.map((event, index) => (
          <EventCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <EventDate>
              <h3>{event.date}</h3>
              <p>{event.month}</p>
              <p>{event.year}</p>
            </EventDate>
            <div>
              <h2>{event.title}</h2>
              <p style={{ margin: '1rem 0' }}>{event.description}</p>
              <p style={{ color: '#666' }}>📍 {event.location}</p>
            </div>
          </EventCard>
        ))}
      </Content>
    </EventsContainer>
  );
}

export default Events; 