import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/Layout'
import TaskContextProvider from '../context/Task'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskContextProvider>
      <ToastContainer autoClose={2000} hideProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TaskContextProvider>
  )
}

export default MyApp
