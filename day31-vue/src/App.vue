<template>
    <div>
      <h1>{{title}}</h1>
      <h1 v-once>{{ title}}</h1>
      Power:
      <input v-model.number.lazy="power" type="range">{{power}}
      <br/>
      Booster:
      <input v-model.number="booster" type="range">{{booster}}
      <br/>
      Total Power : {{power + booster}}
      <hr>
      <input v-model.trim="message" type="text">
      <br/>
      <pre>Message : {{message}}</pre>
      <button @click="changeTitle">Click me</button>
      <p v-pre>user curley bracess to display power  eg, {{power}}</p>
    </div>
</template>
<script>
  export default {
    data(){
        return{
           title :"Modifiers",
           power : 0,
           booster : 0,
           message : ''
        }
    },
    methods:{
      changeTitle(){
        this.title = 'changed'
      }
    }
    
  }
</script>
<style>
</style>

.stop.passive.self.