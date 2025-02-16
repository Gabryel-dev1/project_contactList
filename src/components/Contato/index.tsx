import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  categoria,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categoriaContato, setCategoriaContato] = useState(categoria)

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setCategoriaContato(categoria)
  }

  const obterCategoriaNome = (categoria: enums.Categoria) => {
    switch (categoria) {
      case enums.Categoria.PESSOAL:
        return 'Pessoal'
      case enums.Categoria.PROFISSIONAL:
        return 'Profissional'
      case enums.Categoria.EMPRESAS:
        return 'Empresa'
      default:
        return 'Não especificado'
    }
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {estaEditando ? (
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          ) : (
            nome
          )}
          {estaEditando ? (
            <span>
              <select
                value={categoriaContato}
                onChange={(e) =>
                  setCategoriaContato(e.target.value as enums.Categoria)
                }
              >
                {Object.values(enums.Categoria).map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {obterCategoriaNome(categoria)}
                  </option>
                ))}
              </select>
            </span>
          ) : (
            <span>({obterCategoriaNome(categoriaContato)})</span>
          )}
        </S.Titulo>
      </label>
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    categoria: categoriaContato,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
