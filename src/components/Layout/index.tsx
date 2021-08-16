import styled from 'styled-components';
import Sidebar from '../UI/Sidebar/Sidebar';

type LayoutProps = {
  pageTitle: string,
  children: React.ReactNode
}

const MainContainerWrapper = styled.div`
  background: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const MainContentWrapper = styled.div`
  padding: 24px;
`;

const StyledPageTitle = styled.h1`
  font: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: #272727;
`;

function Layout(props: LayoutProps) {
  return(
    <MainContainerWrapper>
      <Sidebar />
      <MainContentWrapper>
        <StyledPageTitle>
          {props.pageTitle}
        </StyledPageTitle>
        {props.children}
      </MainContentWrapper>
    </MainContainerWrapper>
  )
}

export default Layout;