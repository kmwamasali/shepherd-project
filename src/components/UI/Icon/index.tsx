import styled from 'styled-components';

type IconProps = {
  label: string,
  source: string,
  iconSize?: string,
  inline?: boolean
}

type StyledIconProps = {
  iconSize?: string
}

const StyledIconWrapper = styled.div`
  display: block;
  height: ${(props: StyledIconProps) => props.iconSize ? props.iconSize : '52px'};
  border-radius: 18px;
  margin: 10px;
  &.inline {
    padding: 16px;
  }
  &:hover {
    background: #EAEAEA;
  }
`;

const StyledIcon = styled.img`
  height: 100%;
`;

function Icon(props: IconProps): JSX.Element {
  return(
    <StyledIconWrapper
      iconSize={props.iconSize} 
      className={props.inline ? 'inline': ''}
    >
      <StyledIcon
        src={props.source} 
        alt={props.label}/>
    </StyledIconWrapper>
  )
}

export default Icon;