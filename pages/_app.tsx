import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import ErrorContainer from '../components/ErrorContainer'
import Layout from '../components/Layout'
import ErrorContextProvider from '../context/ErrorContext'
import TaskContextProvider from '../context/TaskContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorContextProvider>
      <TaskContextProvider>
        <ErrorContainer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TaskContextProvider>
    </ErrorContextProvider>
  )
}

export default MyApp
