<template lang="">
    <div class="callContainer">
        <div class="screen">
            <input ref="phoneInput" placeholder="**********" type="text">
            
            <font-awesome-icon @click="call()" class="icon" icon="fa-solid fa-phone"/>
        </div>
        
        
        <div class="contact" ref="contact">{{ checkedContact }}</div>
        <div class="keyboard">
            <button @click="addInput('1')" class="key__button">1</button>
            <button @click="addInput('2')" class="key__button">2</button>
            <button @click="addInput('3')" class="key__button">3</button>
            <button @click="addInput('4')" class="key__button">4</button>
            <button @click="addInput('5')" class="key__button">5</button>
            <button @click="addInput('6')" class="key__button">6</button>
            <button @click="addInput('7')" class="key__button">7</button>
            <button @click="addInput('8')" class="key__button">8</button>
            <button @click="addInput('9')" class="key__button">9</button>
            <button @click="clear()" class="key__button">Clear</button>
            <button @click="addInput('0')" class=" key__button">0</button>
            <button @click="removeInput()" class="key__button">Suppr</button>
        </div>
    </div>
</template>
<script>
//import { query } from 'express';

export default {
    name: 'CallView',
    computed:{
        contacts() {
			return this.$store.state.contacts
		},
        checkedContact(){
            return this.$store.state.checkedContact
        }
    },
    methods:{
        clear(){
            this.$refs.phoneInput.value = ""
            this.$store.commit('contactCheck', "")
        },
        removeInput(){
            let inputValue = this.$refs.phoneInput.value
            let newInputValue = ""
            let i=0
            while(i < inputValue.length -1){
                newInputValue += inputValue[i]
                i++
            }
            this.$refs.phoneInput.value = newInputValue
            this.$store.commit('contactCheck', newInputValue)
        },

        addInput(input){
            let inputValue = this.$refs.phoneInput.value += input
            //if(inputValue.length === 10){
                this.$store.commit('contactCheck', inputValue)
            //}
        },

		call() {
            let inputValue = this.$refs.phoneInput.value
            this.$store.commit('callFromNum', inputValue)
		}
        
    }
}
</script>
<style scoped>
.callContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 70vh;
}

    
    .screen{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
    }
    .screen input{
        font-family: 'alarm clock', sans-serif;
        font-size: 36px;
        width: 250px;
        padding: 8px;
        border: solid 2px;
        
    }
    .icon{
        margin: 20px;
        font-size: 26px;
        padding: 8px;
        border-radius: 20px;
        
    }
    .icon:hover{
        cursor: pointer;
    }
    .contact{
        height: 22px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap:8px;
        align-items: start;
    }

    .keyboard{
        display: grid;
        grid-template-rows: 82px 82px 82px 82px;
        grid-template-columns: 82px 82px 82px;
}
.zero{
  grid-column: 2;
}
.key__button {
        box-sizing: border-box;
        line-height: 80px;
        font-size: 22px;
        text-align: center;
        width: 80px;
        color: #555;
        cursor: pointer;
        margin: 0 8px;
        height: 80px;
        border-color: #f2f2f2;
        border-style: solid;
        text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;
        border-width: 1px;
        border-radius: 10px;
        background: -webkit-linear-gradient(top, #f9f9f9 0%, #D2D2D2 80%, #c0c0c0 100%);
        font-family: sans-serif;
        display: inline-block;
        transition: box-shadow 0.3s ease, transform 0.15s ease;
        box-shadow: 0 0 1px #888,0 1px 0 #fff, 0 6px 0 #C0C0C0, 0 8px 17px rgba(#444, 0.4), 2px 1px 4px rgba(#444, 0.25), -2px 1px 4px rgba(#444, 0.25), 0 9px 16px rgba(#444, 0.1);
}
.key__button:hover, .key__button:focus {
        box-shadow: 0 0 1px #888,0 1px 0 #fff, 0 4px 0 #C0C0C0, 0 2px 35px rgba(#444, 0.3), 2px 2px 4px rgba(#444, 0.25), -2px 2px 4px rgba(#444, 0.25), 0 7px 4px rgba(#444, 0.1);
        transform: translateY(2px);
}

.key__button:active {
        box-shadow: 0 0 1px #888,0 1px 0 #fff, 0 0 0 #C0C0C0, 0 0px 30px rgba(#444, 0.15), 2px 2px 4px rgba(#444, 0.25), -2px 2px 4px rgba(#444, 0.25), 0 0px 4px rgba(#444, 0.25);
        transform: translateY(4px); 
}
    


</style>