<template lang="">
    <div class="add">
        <router-link class="newContact" to="/contacts"><font-awesome-icon class="icon" icon="fa-solid fa-xmark" /></router-link>
    </div>
    <div class="contact">
        <h2>New contact</h2>
        <form action="">
            <input class="name" v-model="newContactName" placeholder="Name">
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
<style scoped>
    form{
        gap:8px;
    }
    input{
        border-radius: 10px;
        padding: 4px;
    }
    button{
        margin-top: 5px;
        border-radius: 10px;
        padding: 4px;
        border: solid 1px;
    }
    .add{
        width: 30%;
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
        
        padding: 30px;
        padding-top: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 2px 2px 5px black;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    
</style>