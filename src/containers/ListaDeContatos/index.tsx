import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome
            .normalize('NFD') // Normaliza a string
            .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
            .toLowerCase()
            .search(
              termo
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
            ) >= 0
      )

      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemetacao =
      termo !== undefined && termo.length > 0 ? `com nome "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) em: todos ${complemetacao}`
    } else {
      mensagem = `${quantidade} contato(s) com ${criterio} igual a ${valor} ${complemetacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            <Contato
              id={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
              categoria={contato.categoria}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
