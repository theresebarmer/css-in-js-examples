import * as React from 'react';
import {css} from 'aphrodite';

import {sheet} from './styles';

class App extends React.Component {
  render() {
    return (
      <div className={css(sheet.box, sheet.blueHover)}>
        <h2 className={css(sheet.h2, sheet.boxHeadline)}>Did you know?</h2>
        <p>Ozelots hate maccaws!</p>
      </div>
    );
  }
}

export default App;