import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className={css(styles.wrapper)}>
        <button className={css(styles.button)}>Click me!</button>
          </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        padding: '0.5em',
        backgroundColor: 'green',
        fontSize: '2em',
        ':hover': { backgroundColor: 'red' },
    },
    wrapper: {
        textAlign: 'center',
        padding: '4em'
    }
});

export default App;
