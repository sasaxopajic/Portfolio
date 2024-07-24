import './App.scss';
import AppLayout from './components/app-layout/AppLayout';

/* import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient() */


function App() {
  return (
    /*  <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools />
     </QueryClientProvider> */
    <AppLayout />

  );
}


export default App;
