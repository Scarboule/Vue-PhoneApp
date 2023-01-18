<template lang="">
    <div v-for="call in history" :key="call.name">
        <div>{{ call.name }}</div>
        <div>{{ call.phone }}</div>
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
<style lang="">
    
</style>