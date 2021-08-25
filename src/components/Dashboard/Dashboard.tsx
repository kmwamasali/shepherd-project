import styled from 'styled-components';
import Layout from "../Layout";
import Card from '../UI/Card';
import file from '../../images/empty-file-icon.png';
import TextArea from '../UI/TextArea';
import AgendaChecklistCard from '../AgendaChecklist';
import PersonalNotesCard from '../PersonalNotes';

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

function Dashboard(): JSX.Element {
  const onTextArea2Change = (e: any): void => {
    e.preventDefault();
  };

  return(
    <Layout pageTitle="Dashboard" >
      <ContentWrapper>
        <AgendaChecklistCard />
        <PersonalNotesCard />
        <Card
          iconSize="20px"
          iconSrc={file}
          iconLabel="location"
          cardTitle="Your Location"
        >
          <TextArea text='' onChange={onTextArea2Change} />
        </Card>
      </ContentWrapper>
    </Layout>
  )
}

export default Dashboard;
