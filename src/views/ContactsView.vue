<template lang="">
    <div v-for="contact in contacts" :key="contact.name">
        <div class="contact">
            <span>{{ contact.name }}</span>
            <span>{{ contact.phone}}</span>
            <button @click="call(contact)">Call</button>
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
			this.$store.commit('call', contact)
		}
    }
}
</script>
<style lang="">
    
</style>