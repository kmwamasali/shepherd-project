import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import file from '../../images/empty-file-icon.png';
import Button from '../UI/Button';
import TextArea from '../UI/TextArea';
import firebase from '../../utility/firebase';

function PersonalNotes(): JSX.Element {
  // text area state and functions
  const [textAreaValue, updatetextAreaValue] = useState();

  useEffect(() => {
    firebase.ref('/text').get().then((snapshot) => {
      if (snapshot.exists()) {
        return updatetextAreaValue(snapshot.val());
      }
    });
  }, []);

  const onTextAreaChange = (e: any): void => {
    updatetextAreaValue(e.currentTarget.value);
    firebase.ref('/text').set(e.currentTarget.value);
  };

  return(
    <Card
      iconSize="20px"
      iconSrc={file}
      iconLabel="agenda"
      cardTitle="Personal Notes"
    >
      <TextArea limited='500' text={textAreaValue} onChange={onTextAreaChange} />
      <Button
        label="Check Hover State" />
    </Card>
  )
}

export default PersonalNotes;
