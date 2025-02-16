import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Rodrigo Ferreira',
      categoria: enums.Categoria.PESSOAL,
      email: 'rodrigo33@gmail.com',
      telefone: '+55 94 99255 8877'
    },
    {
      id: 2,
      nome: 'Fabio Pereira',
      categoria: enums.Categoria.PROFISSIONAL,
      email: 'fabio234@gmail.com',
      telefone: '+55 94 99154 8547'
    },
    {
      id: 3,
      nome: 'Maria Silva',
      categoria: enums.Categoria.PESSOAL,
      email: 'mariaSS@gmail.com',
      telefone: '+55 94 99154 8547'
    },
    {
      id: 4,
      nome: 'Seguradora',
      categoria: enums.Categoria.EMPRESAS,
      email: 'seguradoraAA@seguradora.com',
      telefone: '+55 4002 8922'
    },
    {
      id: 5,
      nome: 'Joao Souza',
      categoria: enums.Categoria.PROFISSIONAL,
      email: 'joao234@gmail.com',
      telefone: '+55 94 99154 8547'
    },
    {
      id: 6,
      nome: 'Operadora Vivo',
      categoria: enums.Categoria.EMPRESAS,
      email: 'contato@vivoclientes.com',
      telefone: '*8486'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    alteraCategoria: (
      state,
      action: PayloadAction<{ id: number; categoria: enums.Categoria }>
    ) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato].categoria = action.payload.categoria
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraCategoria } =
  contatosSlice.actions

export default contatosSlice.reducer
