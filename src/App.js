import Nav from './routes/Nav';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
    </QueryClientProvider>
  );
};

export default App;
