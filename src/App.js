import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import { white } from './theme/variables';
import Header from './components/Header';
import UsersList from './components/UsersList';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 600px;
  min-height: 400px;
  margin-left: 20px;
  margin0-right: 20px;
  background-color: ${white};
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Content>
          <Header />
          <UsersList />
        </Content>
      </AppWrapper>
    </Fragment>
  );
};
export default App;
