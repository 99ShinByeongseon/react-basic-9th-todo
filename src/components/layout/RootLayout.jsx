import styled from "styled-components";

const RootLayout = ({ children }) => {
  return (
    <MainContainer>
      <MainContent> {children} </MainContent>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  min-height: 100vh;
  background-color: #f6f5f8;
`;

const MainContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
`;

export default RootLayout;
