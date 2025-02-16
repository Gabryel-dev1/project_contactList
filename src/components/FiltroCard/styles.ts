import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.roxoForte : variaveis.cinzaClaro2)};
  background-color: ${(props) =>
    props.ativo ? variaveis.roxoClaro : variaveis.cinzaClaro};
  color: ${(props) =>
    props.ativo
      ? '#fff'
      : variaveis.cinzaEscuro}; /* Alteração aqui: cor do texto em branco quando ativo */
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
