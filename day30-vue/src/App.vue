<template>
  <div>
    <h1>{{title}}</h1> 
    <h1>{{title.length}}</h1> 
    <h1>{{title.toLocaleUpperCase()}} Himani</h1> 
    <h1>{{title.toLocaleLowerCase()}}</h1> 
    <h2>{{age * 20}}</h2> 
    <!-- intropolation -->
    <hr>
    <h2 v-text="title"></h2>
    <h2 v-text="age * 30"></h2>
    <div v-html="messagetag"></div>  <!--  //when trust the source we can  use v-html -->
    <div v-bind:class="dynamicClass">
      hello
    </div>
    <div v-bind:id="dynamicId">
      hello
    </div>
    <button v-bind:disabled="show">Click me</button>
    <input type="checkbox" v-model="show"/>
    <hr>
    <fieldset v-bind:hidden="!show">
      <legend>Terms and Conditions</legend>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio adipisci mollitia. Neque inventore eos voluptates est accusamus vero quaerat sed totam, commodi temporibus iure ut iste velit dolorem eius.</p>
    </fieldset>
    <hr>
    <div v-bind:class="['box', 'brdr']">
      hello combining two classes styles
    </div>
    <div v-bind:class="{'pinkbox' : gender === 'female'}">
      hello, if female the pink
    </div>
    <hr>
    <button v-bind:data-sku="itemid">Item for sale</button>
  </div>
  <div v-bind:lang="speak">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia consectetur porro doloribus repudiandae aliquam unde dolore totam voluptate quam, voluptatem obcaecati inventore sed repellat! Omnis a laudantium rem dicta iste!
  </div>
</template>


<script>
export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
      title : "welcome to valtech_ india",
      age : 21,
      messagetag : "<span>welcome to <u>your</u> <em> life</em></span>",
      dynamicClass : "box",
      dynamicId : "player",
      show : false,
      gender : "female",
      itemid : 12345,
      speak : "fr"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
  width: 300px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  background-color: rgb(189, 124, 243);
  color: aliceblue;
  margin: auto;

}
.brdr{
  border : 5px dashed black;
}
#player{
  width: 300px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  background-color: rgb(131, 245, 160);
  margin: auto;
  color: rgb(2, 11, 19);
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

}
.pinkbox{
  width: 200px;
  height: 100px;
  background-color: pink;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
  margin: auto;
}
.bluebox{
  width: 200px;
  height: 100px;
  background-color: blue;
  color: antiquewhite;
  font-family: sans-serif;
  margin-top: 20px;
 line-height: 110px;
 margin: auto;
}
div:lang("fr"){
    background-color: yellowgreen;
}
</style>
