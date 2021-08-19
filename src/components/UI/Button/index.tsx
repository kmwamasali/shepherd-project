import styled from 'styled-components';
import Icon from '../Icon';
import plusIcon from '../../../images/plus-icon.png';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  margin: 20px auto 0;
  background: transparent;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 10px;
  &:hover {
    background: rgba(234, 234, 234, 0.4);
  }
`;

interface ButtonProps {
  label: string,
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return(
    <StyledButton onClick={onClick} >
      <Icon
        iconSize="20px"
        source={plusIcon}
        label="Add icon"
        />
        {label}
    </StyledButton>
  )
}

export default Button;