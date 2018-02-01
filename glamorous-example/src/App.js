import React, { Component } from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.section({
    textAlign: 'center',
    padding: '4em'
});

const Button = glamorous.button({
    backgroundColor: 'green',
    '&:hover': {
        backgroundColor: 'red'
    },
});

class App extends Component {
  render() {
    return (
      <div className="App">
          <Wrapper>
          <Button>Click me!</Button>
          </Wrapper>
      </div>
    );
  }
}

export default App;
