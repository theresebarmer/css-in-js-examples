import * as React from 'react';
import glamorous from 'glamorous';

import {wisdomblockhover} from './styles';

const HoverBox = glamorous.div( wisdomblockhover.box );
const Headline = glamorous.h2( wisdomblockhover.headline );

class App extends React.Component {
  render() {
    return (
      <HoverBox>
        <Headline>Did you know?</Headline>
        <p>Ozelots hate maccaws!</p>
      </HoverBox>
    );
  }
}

export default App;