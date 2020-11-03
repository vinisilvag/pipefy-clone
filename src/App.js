import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes />
      <GlobalStyles />
    </DndProvider>
  );
};

export default App;
