import styled from 'styled-components';
import logo from '../../../images/logo-icon.png';
import userIcon from '../../../images/user-icon.png';
import clipboard from '../../../images/file-icon.png';
import squaresIcon from '../../../images/squares-icon.png';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 72px;
  box-shadow: 0px 4px 4px #D3D3D3;
`;

const StyledHr = styled.hr`
  border: 2px solid #E9E9EB;
  width: 40px;
  margin: 6px auto;
`;

const UpperIconsDiv = styled.div`
  flex-grow: 4;
`;

const LowerIconsDiv = styled.div`
  flex-grow: 1;
`;

function Sidebar(): JSX.Element {
  return (
    <SidebarContainer>
      <UpperIconsDiv>
        <Icon
          source={logo}
          label="logo"
        />
        <StyledHr />
        <NavLink exact to='/' activeClassName='active'>
          <Icon
            nav={true}
            source={squaresIcon}
            label="Dashboard"
            inline={true}
          />
        </NavLink>
        <NavLink to='/shared-notes' activeClassName='active'>
          <Icon
            nav={true}
            source={clipboard}
            label="Shared Notes"
            inline={true}
          />
        </NavLink>
      </UpperIconsDiv>
      <LowerIconsDiv>
        <StyledHr />
        <Icon
          source={userIcon}
          label="User Account"
        />
      </LowerIconsDiv>
    </SidebarContainer>
  )
}

export default Sidebar;