import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  parametro: 'categoria'
}

export const Card = styled.div`
  background-color: ${variaveis.cinzaFundo};
  box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  width: 80%;
  border: 1px solid ${variaveis.roxoClaro};

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${variaveis.textoBranco};

  span {
    margin-left: 12px;
    font-size: 14px;
    color: ${variaveis.roxoClaro};
    font-weight: 600;
  }

  input {
    background-color: ${variaveis.cinzaClaro};
    border: none;
    border-bottom: 1px solid ${variaveis.cinzaClaro};
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 10px;
  }

  select {
    background-color: ${variaveis.cinzaClaro};
    border: none;
    font-size: 14px;
    border-bottom: 1px solid ${variaveis.cinzaClaro};
    padding: 5px 10px;
    border-radius: 10px;
  }
`

export const Descricao = styled.textarea`
  color: ${variaveis.textoBranco};
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.roxoClaro};
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
