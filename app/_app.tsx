// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// @ts-ignore
function AppWappy({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default AppWappy;
