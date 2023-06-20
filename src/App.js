import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import CardsPage from './pages/CardsPage';
import { ChakraProvider, theme } from '@chakra-ui/react';
import DecksPage from './pages/DecksPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/decks" element={<DecksPage />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
