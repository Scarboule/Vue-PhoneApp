import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Banque',
        phone: '0616183325'
      },
      {
        name: 'Papa',
        phone: '0610341446'
      }

    ],
    history:[],
    checkedContact: "",

  },
  getters: {
  },
  mutations: {
    call(state, contact) {
      state.history.push(contact)
    },
    contactCheck(state, inputValue) {
      state.checkedContact = state.contacts.find(contact => contact.phone == inputValue).name
    },
  },
  actions: {
  },
  modules: {
  }
})
