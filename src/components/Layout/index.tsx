import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactChild
}
const MainContainerWrapper = styled.div`
  background: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  background: #fff;
  width: 72px;
  box-shadow: 0px 4px 4px #D3D3D3;
`;

const MainContentWrapper = styled.div`
  padding: 24px;
`;

function Layout(props: LayoutProps) {
  return(
    <MainContainerWrapper>
      <SidebarContainer />
      <MainContentWrapper>
        {props.children}
      </MainContentWrapper>
    </MainContainerWrapper>
  )
}

export default Layout;