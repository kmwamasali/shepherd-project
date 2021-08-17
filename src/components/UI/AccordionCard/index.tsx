import styled from 'styled-components';
import Icon from '../Icon';


const StyledCard = styled.div`
  background: #fff;
  min-width: 300px;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px #EBEBEB;
  border-radius: 10px;
  margin-right: 20px;
`;

const StyledCardHeader = styled.div`
  display: flex;
  padding: 0 16px;
  border-bottom: 1px solid #eee
`;

const StyledCardHeading = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  margin-top: 10px;
`;

const StyledCardContent = styled.div`
  min-height: 250px;
  padding: 15px;
`;

type CardProps = {
  iconSize: string,
  iconSrc: string,
  iconLabel: string,
  iconSize2: string,
  iconSrc2: string,
  iconLabel2: string,
  cardTitle: string,
  children: React.ReactNode
}

function AccordionCard({
  iconSize, 
  iconLabel, 
  iconSrc,
  iconSize2,
  iconLabel2,
  iconSrc2, 
  cardTitle, 
  children
}: CardProps): JSX.Element {
  return (
    <StyledCard>
      <StyledCardHeader>
        <Icon
          iconSize={iconSize}
          source={iconSrc}
          label={iconLabel}
        />
        <StyledCardHeading>{cardTitle}</StyledCardHeading>
        <Icon
          iconSize={iconSize2}
          source={iconSrc2}
          label={iconLabel2}
        />
      </StyledCardHeader>
      <StyledCardContent>
        {children}
      </StyledCardContent>
    </StyledCard>
  )
}

export default AccordionCard;