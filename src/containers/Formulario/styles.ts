import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.cinzaEscuro};
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    resize: none;
    margin: 16px 0;
    height: 183px;
    border: 1px solid ${variaveis.cinzaClaro2};
    background-color: ${variaveis.cinzaClaro};
    padding: 8px;
    border-radius: 8px;
    color: ${variaveis.cinzaEscuro};
    font-family: 'Roboto', sans-serif;
    transition: border-color 0.3s ease;
    width: 100%;

    &:focus {
      border-color: ${variaveis.roxoClaro};
    }
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    color: ${variaveis.textoBranco};
    font-weight: bold;
  }

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const Opcao = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;
  color: ${variaveis.roxoClaro};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  label {
    font-weight: 600;
  }

  input {
    margin: 0;
  }
`
