import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Titulo>Buscar contatos:</S.Titulo>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Titulo>Selecione filtros:</S.Titulo>
            <S.Filtros>
              <FiltroCard criterio="todas" legenda="todos" />
              <FiltroCard
                valor={enums.Categoria.PESSOAL}
                criterio="categoria"
                legenda="PESSOAL"
              />
              <FiltroCard
                valor={enums.Categoria.PROFISSIONAL}
                criterio="categoria"
                legenda="PROFISSIONAL"
              />
              <FiltroCard
                valor={enums.Categoria.EMPRESAS}
                criterio="categoria"
                legenda="EMPRESAS"
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
