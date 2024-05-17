import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import App from './components/App.jsx'
import { store, persistor } from './store/store'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <div>
        <ToastContainer />
      </div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={<div>loading...</div>} persistor={persistor}>
            {/* <App /> */}

            <App />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  </>
)
