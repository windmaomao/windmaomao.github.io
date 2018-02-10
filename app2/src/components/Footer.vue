<template>
  <footer class="footer">
    <p>Stay ahead and be focused.</p>
    <p>&copy; Copyright 2018 - <a>Fang Jin</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style scoped>
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
