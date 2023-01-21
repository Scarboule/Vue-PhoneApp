<template lang="">
    <div class="container">
        <div class="history" v-for="call in history" :key="call.phone">
            <div>{{call.date}}</div>
            <div v-if="call.name == 'Not in contacts'">{{ call.phone }}</div>
            <div v-else>{{ call.name }}</div>
            
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
    .container{
        display: flex;
        flex-direction: column-reverse;
    }
    .history{
        display: flex;
        justify-content: center;align-items: center;
        
    }
</style>