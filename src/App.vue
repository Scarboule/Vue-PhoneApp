<template>
  <div class="container">
    <nav>
      <router-link to="/history">History</router-link> |
      <router-link to="/call">Call</router-link> |
      <router-link to="/contacts">Contatcs</router-link>
    </nav>
    <router-view/>

  </div>
  
</template>

<script>




</script>

<style>
@import url('https://fonts.cdnfonts.com/css/alarm-clock');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
