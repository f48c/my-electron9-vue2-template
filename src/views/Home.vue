<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Bourne
 * @Date: 2022-06-22 11:08:04
 * @LastEditors: Bourne
 * @LastEditTime: 2022-06-22 11:24:21
-->
<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + JavaScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
