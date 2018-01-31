import * as React from 'react';
import {wisdomblockhover} from './styles';
import Radium from 'radium';

@Radium
class App extends React.Component {
  render() {
    return (
      <div style={wisdomblockhover.box}>
        <Headline>Did you know?</Headline>
        <p>Ozelots hate maccaws!</p>
      </div>
    );
  }
}

const Headline = Radium(props => <h2 style={wisdomblockhover.headline}>{props.children}</h2>);

export default App;