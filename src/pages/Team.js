import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const TeamContainer = styled.div`
  min-height: 100vh;
  padding: 80px 2rem 2rem;
  background: #fff;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h1)`
  font-size: 2.5rem;
  text-align: center;
  margin: 3rem 0;
  color: #000;
  font-weight: 700;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const MemberCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    color: #000;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

const DepartmentSection = styled.div`
  margin-bottom: 4rem;
`;

function Team() {
  const teamMembers = {
    inCharge: [
      { name: "Omkar Mohite", role: "Teacher In-Charge", image: "omkar.png" }
    ],
    chairpersons: [
      { name: "Gaurav Mehra", role: "Chairperson (TY)", image: "gaurav1.JPG" }
    ],
    deputyChairperson: [
      { name: "Himanshu Sharma", role: "Deputy Chairperson (SY)", image: "himanshu.jpg" }
    ],
    viceChairpersons: [
      { name: "Keyur Rathod", role: "Vice Chairperson (TY)", image: "keyur.jpg" },
      { name: "Meet Dhruv", role: "Vice Chairperson (TY)", image: "meet.jpg" },
      { name: "Abhishek Yadav", role: "Vice Chairperson (SY)", image: "abhishek.jpg" },
      { name: "Swayam Parekh", role: "Vice Chairperson (FY)", image: "swayam.jpg" }
    ],
    departments: {
      events: [
        { name: "Tisha Karkar", role: "Events Head (SY)", image: "tisha.jpg" },
        { name: "Riya Bishwakarma", role: "Events Head (FY)", image: "riya.jpg" }
      ],
      gaming: [
        { name: "Mohit Deore", role: "Gaming & Sports Head (SY)", image: "mohit.jpg" },
        { name: "Hussain Suleman", role: "Gaming & Sports Head (FY)", image: "hussain.jpg" }
      ],
      pr: [
        { name: "Ashika Ashok", role: "Public Relations Head (TY)", image: "ashika.jpg" }
      ],
      logistics: [
        { name: "Sejal Kotak", role: "Logistics Head (MSc Part-I)", image: "sejal.jpg" }
      ],
      security: [
        { name: "Aditya Vishwakarma", role: "Security Head (SY)", image: "aditya.jpg" }
      ],
      technical: [
        { name: "Siddh Vyas", role: "Technical Head (MSc Part-I)", image: "siddh.jpg" }
      ],
      productions: [
        { name: "Ashwini Vishwakarma", role: "Productions Head (SY)", image: "ashwini.jpg" }
      ],
      graphics: [
        { name: "Lavya Triwadi", role: "Graphics Head (FY)", image: "lavya.jpg" }
      ],
      creatives: [
        { name: "Simran Gupta", role: "Creatives Head (TY)", image: "simran.jpg" }
      ],
      content: [
        { name: "Anshika Pangotra", role: "Content Head (SY)", image: "anshika.jpg" }
      ]
    }
  };

  return (
    <TeamContainer>
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TEACHER IN-CHARGE
        </SectionTitle>
        <TeamGrid>
          {teamMembers.inCharge.map((member, index) => (
            <MemberCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </MemberCard>
          ))}
        </TeamGrid>

        <SectionTitle>CHAIRPERSON</SectionTitle>
        <TeamGrid>
          {teamMembers.chairpersons.map((member, index) => (
            <MemberCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </MemberCard>
          ))}
        </TeamGrid>

        <SectionTitle>DEPUTY CHAIRPERSON</SectionTitle>
        <TeamGrid>
          {teamMembers.deputyChairperson.map((member, index) => (
            <MemberCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </MemberCard>
          ))}
        </TeamGrid>

        <SectionTitle>VICE CHAIRPERSON</SectionTitle>
        <TeamGrid>
          {teamMembers.viceChairpersons.map((member, index) => (
            <MemberCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </MemberCard>
          ))}
        </TeamGrid>

        <SectionTitle>HEAD OF DEPARTMENTS</SectionTitle>
        {Object.entries(teamMembers.departments).map(([dept, members]) => (
          <DepartmentSection key={dept}>
            <SectionTitle style={{ fontSize: '2rem' }}>
              {dept === 'pr' ? 'PUBLIC RELATIONS' : 
               dept === 'gaming' ? 'GAMING & SPORTS' :
               dept.toUpperCase()}
            </SectionTitle>
            <TeamGrid>
              {members.map((member, index) => (
                <MemberCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </MemberCard>
              ))}
            </TeamGrid>
          </DepartmentSection>
        ))}
      </Content>
    </TeamContainer>
  );
}

export default Team; 