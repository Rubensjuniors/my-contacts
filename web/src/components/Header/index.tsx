import { Container, InputSearchContainer, Logo } from './styles'

export const Header = () => {
  return (
    <Container>
      <Logo>My<span>Contacts</span></Logo>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
    </Container>
  )
}
