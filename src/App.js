import React, { Component } from 'react';
import Button from './component/Button/Button';
import { RedParagraph, GreenParagraph } from './component/Paragraph/Paragraph';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const BlueButton = styled(Button)`
  color: blue;

  :hover {
    background-color: blue;
    color: #fff;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <RedParagraph> I am dangerous </RedParagraph>
          <GreenParagraph> All is well here </GreenParagraph>
          <Button> Green Button </Button>
          <BlueButton> Blue Button </BlueButton>
        </p>
      </div>
    );
  }
}

export default App;
