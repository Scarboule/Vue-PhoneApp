<template lang="">
    <div>
        <h2>Call logs</h2>
        <div class="reverser">
            <div class="history" v-for="call in history" :key="call.phone">
                <div class="contact">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-phone"/>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div v-if="call.name == 'Not in contacts'">{{ call.phone }}</div>
                    <div v-else>{{ call.name }}</div>
                    <div class="date">{{call.date}}</div>
                </div>
            </div>
        </div>
    </div>
    

    
    
</template>
<script>
export default {
    name: "HistoryView",
    computed:{
        history(){
            return this.$store.state.history
        }
    }
    
}
</script>
<style scoped>
    .reverser{
        display: flex;
        flex-direction: column-reverse;
    }
    .history{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .icon{
        margin-right: 20px;
    }
    .contact{
        width: 300px;
        height: 60px;
        padding: 20px;
        margin: 10px;
        display: flex;
        box-shadow: 2px 2px 5px black;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;
    }
    .date{
        margin-left: 20px;
        max-width: 145px;
    }
</style>