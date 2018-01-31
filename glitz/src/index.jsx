import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlitzClient from '@glitz/core';
import { GlitzProvider } from '@glitz/react';

import App from './app';

const glitz = new GlitzClient();

ReactDOM.render(
  <GlitzProvider glitz={glitz}>
    <App />
  </GlitzProvider>,
  document.getElementById('glitzhover')
);