<template lang="">
    <div>
        <form action="">
            <input v-model="newContactName" placeholder="Name">
            <input v-model="newContactPhone" placeholder="Phone number">
            <button @click="addContact()">Add to contacts</button>
        </form>
    </div>
</template>
<script>
export default {
    addContact(){
            let newContact= {
                name: this.newContactName,
                phone: this.newContactPhone
            }
            this.$store.commit('addContact', newContact)

        },
}
</script>
<style lang="">
    
</style>