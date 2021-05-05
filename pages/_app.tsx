import { GlobalStyles, theme } from '@/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
