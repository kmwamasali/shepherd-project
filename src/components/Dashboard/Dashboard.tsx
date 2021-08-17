import styled from 'styled-components';
import Layout from "../Layout";
import Card from '../UI/Card';
import squares from '../../images/squares-icon.png';
import question from '../../images/question-mark-icon.png';
import file from '../../images/empty-file-icon.png';
import AccordionCard from '../UI/AccordionCard';
import Button from '../UI/Button';

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledInput = styled.input`
  border: 2px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  background: #F9F9F9;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  min-height: 150px;
`;

function Dashboard(): JSX.Element {
  return(
    <Layout pageTitle="Dashboard" >
      <ContentWrapper>
        <AccordionCard
          iconSize="20px"
          iconSrc={squares}
          iconLabel="agenda"
          iconSize2="10px"
          iconSrc2={question}
          iconLabel2="hover"
          cardTitle="Agenda"
        >
          <StyledLabel>
            <StyledInput
              type="checkbox"
              name="checkbox1"
            />
              Task 1
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              name="checkbox2"
            />
              Task 2
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              name="checkbox3"
            />
              Task 3
          </StyledLabel>
          <Button
            label="Add Checkbox" />
        </AccordionCard>
        <Card
          iconSize="20px"
          iconSrc={file}
          iconLabel="agenda"
          cardTitle="Personal Notes"
        >
          <StyledTextArea value={''} />
          <Button
            label="Add Checkbox" />
        </Card>
        <Card
          iconSize="20px"
          iconSrc={file}
          iconLabel="your location"
          cardTitle="Your Location"
        >
          <StyledTextArea value={''} />
          <Button
            label="Add Checkbox" />
        </Card>
      </ContentWrapper>
    </Layout>
  )
}

export default Dashboard;
