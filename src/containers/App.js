import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width : 5rem;
  height : 5rem;
  background : ${props => props.color || 'black'};
  border-radius : 50%;
`;

class App extends React.Component{
  render(){
    return(
      <div>
        <Circle color="blue"/>
      </div>
    );
  }
}

export default App;
