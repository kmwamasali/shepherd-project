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
  margin-bottom: 25px;
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
  min-height: 300px;
  padding: 25px;
`;

type CardProps = {
  iconSize: string,
  iconSrc: string,
  iconLabel: string,
  cardTitle: string,
  children: React.ReactNode
}

function Card({iconSize, iconLabel, iconSrc, cardTitle, children}: CardProps): JSX.Element {
  return (
    <StyledCard>
      <StyledCardHeader>
        <Icon
          iconSize={iconSize}
          source={iconSrc}
          label={iconLabel}
        />
        <StyledCardHeading>{cardTitle}</StyledCardHeading>
      </StyledCardHeader>
      <StyledCardContent>
        {children}
      </StyledCardContent>
    </StyledCard>
  )
}

export default Card;