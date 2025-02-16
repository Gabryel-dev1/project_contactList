import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 70px 16px;
  background-color: ${variaveis.pretoFundo};
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

export const Titulo = styled.h2`
  color: ${variaveis.textoBranco};
  margin-bottom: 10px;
  margin-top: 25px;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
