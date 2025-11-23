import styled from 'styled-components'

export const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  border-radius: 8px;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
      border-color: var(--cor-principal);
    }
  }
`

export const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkVaga = styled.a`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid var(--cor-secundaria);
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
