import React from 'react';
import ToDos from './components/ToDos/ToDos';
import { ToDosContainer } from './design-system/ToDosContainer/ToDosContainer';

function App() {
  return (
    <ToDosContainer>
      <ToDos />
    </ToDosContainer>
  );
}

export default App;
