import styled from 'styled-components';
import Layout from "../Layout";
import AgendaChecklistCard from '../AgendaChecklist';
import PersonalNotesCard from '../PersonalNotes';
import LocationCard from '../LocationCard';

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

function Dashboard(): JSX.Element {
  return(
    <Layout pageTitle="Dashboard" >
      <ContentWrapper>
        <AgendaChecklistCard />
        <PersonalNotesCard />
        <LocationCard />
      </ContentWrapper>
    </Layout>
  )
}

export default Dashboard;
