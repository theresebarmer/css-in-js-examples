import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.section`
    text-align: center;
    padding: 4em;
`

const Button = styled.button`
        padding: 0.5em;
        background-color: green;
        font-size: 2em;
        &:hover {
            background-color: red;
        }
`;

class App extends Component {
    render() {
        return (
            <div className="App">
            <Wrapper>
            <Button>Click me!</Button>
        </Wrapper>
        </div>
    )
    }
}

export default App;
