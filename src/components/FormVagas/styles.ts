import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--cor-principal);
  width: 280px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Botao = styled.button`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
