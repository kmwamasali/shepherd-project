import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import file from '../../images/empty-file-icon.png';
import Button from '../UI/Button';
import TextArea from '../UI/TextArea';
import firebase from '../../utility/firebase';

function PersonalNotes(): JSX.Element {
  // text area state and functions
  const [textAreaValue, updatetextAreaValue] = useState();

  const getData = () => {
    firebase.ref('/text').get().then((snapshot) => {
      if (snapshot.exists()) {
        return updatetextAreaValue(snapshot.val());
      }
    });
  }

  useEffect(() => getData(), [])

  const onTextAreaChange = (e: any): void => {
    firebase.ref('/text').set(e.currentTarget.value, (err) => {
      if (err) {
        console.log(err)
        } else {
          getData();
        }
    });
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
