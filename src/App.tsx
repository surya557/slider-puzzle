import React from 'react';
import SliderPuzzle from "./components/SliderPuzzle";
import * as Styled from './styled';

function App() {
  return (
      <Styled.App>
          <SliderPuzzle
              rows={4}
              columns={4}
          />
      </Styled.App>
  );
}

export default App;
