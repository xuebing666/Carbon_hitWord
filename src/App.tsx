import { BrowserRouter } from 'react-router-dom';
import { ReactQueryProvider } from './context/react-query-context'
import { MantineProvider } from '@mantine/core';
import Router from './Routes';

function App() {
  return (
    <>
     <BrowserRouter>
        <ReactQueryProvider>
          <MantineProvider>
            <Router/>
          </MantineProvider>
        </ReactQueryProvider>
      </BrowserRouter>
    </>
  )
}

export default App
