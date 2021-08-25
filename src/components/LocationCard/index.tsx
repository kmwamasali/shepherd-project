import Card from '../UI/Card';
import file from '../../images/empty-file-icon.png';
import TextArea from '../UI/TextArea';
import { useEffect, useState } from 'react';

function LocationCard(): JSX.Element {
  const [location, updateLocation] = useState({});

  useEffect(() => {
    fetch('https://api.db-ip.com/v2/free/self')
    .then(repsonse => repsonse.json())
    .then(data => {
      const info = `country: ${data.countryName} \ncontinent: ${data.continentName}`;
      console.log(info)
      updateLocation(info)
    });
  }, [])

  const onTextArea2Change = (e: any): void => {
    e.preventDefault();
  };

  return(
    <Card
      iconSize="20px"
      iconSrc={file}
      iconLabel="location"
      cardTitle="Your Location"
    >
      <TextArea text={location} onChange={onTextArea2Change} />
    </Card>
  )
}

export default LocationCard;
