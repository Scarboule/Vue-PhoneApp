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
      },

    ],
    history:[],
    checkedContact: "",

  },
  getters: {
  },
  mutations: {

    call(state, name, phone) {
      let callDate = new Date().toLocaleString()
      let calledContact = {
        name: name,
        phone: phone,
        date: callDate,
      }
      state.history.push(calledContact)
    },

    addContact(state, newContact){
      state.contacts.push(newContact)
    },

    callFromNum(state, inputValue){
      let contact = state.contacts.find(contact => contact.phone == inputValue)
      if( contact == undefined){
        let callDate = new Date().toLocaleString()

        contact = {
          name: "Not in contacts",
          phone: inputValue,
          date: callDate
        }
      }
      state.history.push(contact)
    },

    contactCheck(state, inputValue) {
      if(state.contacts.find(contact => contact.phone == inputValue) == undefined){
        state.checkedContact = ""
      }else{
        state.checkedContact = state.contacts.find(contact => contact.phone == inputValue).name
      }
      

    },
  },
  actions: {
  },
  modules: {
  }
})
