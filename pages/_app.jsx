import {GlobalStyle }from '../styles/global'
import PhotoContextProvider from "../context/PhotoContext";

export default function App({ Component, pageProps }) {
  return (
    <PhotoContextProvider>
      <GlobalStyle />
      
      <Component {...pageProps} />
      
    </PhotoContextProvider>
  )
}