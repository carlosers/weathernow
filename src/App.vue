<template>
  <div id="app" class="mobile">
    <HeaderFix />
    <Section />
  </div>
</template>

<script>
import HeaderFix from '@/components/HeaderFix.vue'
import Section from '@/components/Section.vue';
export default {
  name: 'App',
  components: {
    HeaderFix,
    Section,
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
}

body {
    background-color: #f1f1f1;
    margin: 0 0 30px 30px;
    min-width: 375px;
}

#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

}

@media All and (max-width:280px){
   body {
     width: 200px;
     display: flex;
     flex-direction: column;
     background-color: blue;
   }
}

</style>
