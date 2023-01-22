<template lang="">
    <h2>Contatcs</h2>
    <div class="add">
        <router-link class="newContact" to="/new-contact"><font-awesome-icon class="icon" icon="fa-solid fa-plus" />Add new Contact</router-link>
    </div>
    <div v-for="contact in contacts" :key="contact.name">
        <div class="contact">
            <div class="info">
                <span class="name">{{ contact.name }}</span>
                <span class="number">{{ contact.phone}}</span>
            </div>
            <div class="icon">
                <font-awesome-icon @click="call(contact)"  icon="fa-solid fa-phone"/>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {

    name: 'ContactsView',

	computed: {
		contacts() {
			return this.$store.state.contacts
		},
	},
    methods: {
		call(contact) {
			this.$store.commit('call', contact.name,contact.phone)
		},
        
    }
}
</script>
<style scoped>
    .add{
        width: 50%;
        display: flex;
        align-items:flex-end;
    }
    .newContact{
        padding: 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        border: solid 1px;
        border-radius: 20px;
    }
    .contact{
        width: 230px;
        height: 60px;
        padding: 20px;
        margin: 10px;
        display: flex;
        box-shadow: 2px 2px 5px black;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;
    }
    .info{
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap:8px;
        align-items: start;
    }
    .name{
        font-weight: 700;
    }
    .number{
        opacity: 70%;
    }
    .icon{
        font-size: 26px;
        padding: 8px;
        border-radius: 20px;
        
    }
    .icon:hover{
        cursor: pointer;
    }

</style>