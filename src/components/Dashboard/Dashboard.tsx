import styled from 'styled-components';
import Layout from "../Layout";
import Card from '../UI/Card';
import squares from '../../images/squares-icon.png';
import question from '../../images/question-mark-icon.png';
import file from '../../images/empty-file-icon.png';
import AccordionCard from '../UI/AccordionCard';
import Button from '../UI/Button';
import { useState } from 'react';

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledCheckbox = styled.input`
  border: 2px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 10px;
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
  const [checklistItems, updateChecklistItems] = useState([
    { label: 'Task 1', value: 1, checked: true },
    { label: 'Task 2', value: 2, checked: false },
    { label: 'Task 3', value: 3, checked: false }
  ]);

  const handleChange = (val: HTMLInputElement): void => {
    const mappedArr = checklistItems.map(item => {
      return item.label === val.name ? { ...item, checked: !item.checked } : { ...item };
    })
    updateChecklistItems(mappedArr)
  };

  const addNewChecklistItem = () => {
    const len = checklistItems.length + 1;
    const newItem = {
      label: `Task ${len}`,
      value: len,
      checked: false,
    };
    const newItemsArr = checklistItems.concat([newItem]);
    return updateChecklistItems(newItemsArr);
  };

  const checklistItemsNode = checklistItems.map(item => (
    <StyledLabel key={item.value}>
      <StyledCheckbox
        type="checkbox"
        name={item.label}
        checked={item.checked}
        onChange={(e) => handleChange(e.target)}
      />
        {item.label}
    </StyledLabel>
  ));

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
          {checklistItemsNode}
          <Button
            label="Add Checkbox"
            onClick={addNewChecklistItem} />
        </AccordionCard>
        <Card
          iconSize="20px"
          iconSrc={file}
          iconLabel="agenda"
          cardTitle="Personal Notes"
        >
          <StyledTextArea value={''} />
          <Button
            label="Check Hover State" />
        </Card>
        <Card
          iconSize="20px"
          iconSrc={file}
          iconLabel="location"
          cardTitle="Your Location"
        >
          <StyledTextArea value={''} />
        </Card>
      </ContentWrapper>
    </Layout>
  )
}

export default Dashboard;
