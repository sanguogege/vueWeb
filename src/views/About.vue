<template>
  <div class="about">
    <h1 v-on:click="ss">This is an about page</h1>
    <p v-for="aa in axero" :key="aa">
      {{aa}}
    </p>
    <p>{{axero.a}}</p>
    <p>{{axero.b}}</p>
    <HelloWorld msg="hahha"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function(){
    return {
            axero: {
              a:'这是data返回的数据111111',
              b:'这是data返回的数据22222',
            },
          }
  },
  methods: {
    ss: function(){
        alert("11")
    }
  }
}
</script>

<style>
  .about h1 {
    color: red;
  }
</style>
