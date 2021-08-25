import styled from 'styled-components';

type IconProps = {
  label: string,
  source: string,
  iconSize?: string,
  inline?: boolean,
  nav?: boolean
}

type StyledIconProps = {
  iconSize?: string,
  nav?: boolean 
}

const StyledIconWrapper = styled.div`
  display: block;
  height: ${(props: StyledIconProps) => props.iconSize ? props.iconSize : '52px'};
  border-radius: 18px;
  margin: 10px;
  &.inline {
    padding: 16px;
  }
  .active & {
    background: #EAEAEA;
  }
  &:hover {
    background: ${(props: StyledIconProps) => props.nav ? '#EAEAEA' : 'transparent'};
  }
`;

const StyledIcon = styled.img`
  height: 100%;
`;

function Icon(props: IconProps): JSX.Element {
  return(
    <StyledIconWrapper
      nav={props.nav}
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