import React from 'react';
import './App.css';
import Nav from './routes/Nav';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Nav />
    </QueryClientProvider>
  );
};

export default App;


