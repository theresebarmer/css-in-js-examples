import React, { Component } from 'react';
import glamorous from 'glamorous';

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
          <Button>Click me!</Button>
      </div>
    );
  }
}

export default App;
