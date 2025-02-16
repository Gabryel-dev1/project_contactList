import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  background-color: ${variaveis.roxoClaro};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 50px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 4px 12px ${variaveis.roxoForte};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${variaveis.roxoForte};
    transform: translateY(-4px);
  }
`
