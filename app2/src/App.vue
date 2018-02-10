<template>
  <div id="app">
    <Header/>
    <Main/>

    <footer class="footer">
      <p>Stay ahead and be focused.</p>
      <p>&copy; Copyright 2018 - <a>Fang Jin</a></p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.footer {
  position: relative;
  font-size: 90%;
  font-style: italic;
  z-index: 1000;
}
.footer p {
  text-align: center;
}
</style>
