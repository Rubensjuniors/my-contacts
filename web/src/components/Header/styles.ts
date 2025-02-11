import styled from 'styled-components'

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const Logo = styled.h1`
  span {
    color: ${({ theme }) => theme.colorLogo};
  }
`
export const InputSearchContainer = styled.form`
  width: 100%;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));

  input {
    width: 100%;
    border-radius: 25px;
    height: 50px;
    border: none;
    background-color: #fff;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`
