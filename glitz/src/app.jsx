import * as React from 'react';
import { styled } from '@glitz/react';

import {wisdomblockhover} from './styles';

const HoverBox = styled.div( wisdomblockhover.box );
const Headline = styled.h2( wisdomblockhover.headline );

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