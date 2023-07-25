import { QueryClient, QueryClientProvider } from "react-query";
import Nav from "./routes/Nav";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
    </QueryClientProvider>
  );
};

export default App;
