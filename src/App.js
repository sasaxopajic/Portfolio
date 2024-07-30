import './App.module.scss';
import AppLayout from './components/app-layout/AppLayout';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppLayout />
    </QueryClientProvider>
  );
}

export default App;
