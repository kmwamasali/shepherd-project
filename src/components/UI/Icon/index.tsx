import styled from 'styled-components';

type IconProps = {
  label: string,
  source: string,
  inline?: boolean
}

const StyledIconWrapper = styled.div`
  display: block;
  height: 52px;
  border-radius: 18px;
  margin: 10px;
  &.inline {
    background: #EAEAEA;
    padding: 16px;
  }
`;

const StyledIcon = styled.img`
  width: 100%;
`;

function Icon(props: IconProps): JSX.Element {
  return(
    <StyledIconWrapper className={props.inline ? 'inline': ''}>
      <StyledIcon
        src={props.source} 
        alt={props.label}/>
    </StyledIconWrapper>
  )
}

export default Icon;