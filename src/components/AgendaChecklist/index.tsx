import styled from 'styled-components';
import squares from '../../images/squares-icon.png';
import question from '../../images/question-mark-icon.png';
import AccordionCard from '../UI/AccordionCard';
import Button from '../UI/Button';
import { useState } from 'react';

const StyledContent = styled.div`
  color: #272727;
  font-size: 10px;
  min-height: 188px;
  margin-bottom: 7px;
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

function ChecklistCard(): JSX.Element {
// checklist state and functions
  const [checklistItems, updateChecklistItems] = useState([
    { label: 'Task 1', value: 1, checked: true },
    { label: 'Task 2', value: 2, checked: false },
    { label: 'Task 3', value: 3, checked: false }
  ]);
  const handleChecklistChange = (val: HTMLInputElement): void => {
    const mappedArr = checklistItems.map(item => {
      return item.label === val.name ? { ...item, checked: !item.checked } : { ...item };
    })
    updateChecklistItems(mappedArr);
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
        onChange={(e) => handleChecklistChange(e.target)}
      />
        {item.label}
    </StyledLabel>
  ));

  return(
    <AccordionCard
      iconSize="20px"
      iconSrc={squares}
      iconLabel="agenda"
      iconSize2="10px"
      iconSrc2={question}
      iconLabel2="hover"
      cardTitle="Agenda"
    >
      <StyledContent>
        {checklistItemsNode}
      </StyledContent>
      <Button
        label="Add Checkbox"
        onClick={addNewChecklistItem} />
    </AccordionCard>
  )
}

export default ChecklistCard;
