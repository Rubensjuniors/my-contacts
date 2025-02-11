import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import defaultTeheme from '../../assets/styles/themes/default'
import { Container } from './styles'
import { Header } from '../../components/Header'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTeheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  )
}
