import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import TaskContextProvider from '../context/Task'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TaskContextProvider>
  )
}

export default MyApp
