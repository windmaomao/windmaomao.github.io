<template>
  <div class="stock-page">
    <nav class="navbar is-light is-fixed-top" role="navigation">
      <div class="navbar-brand">
        <a class="navbar-item logo-wrapper">
          <img src="../../assets/logo.png" class="logo" />
        </a>
        <div class="navbar-burger burger" data-target="navbar"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-end"></div>
      </div>
    </nav>
    <section class="main">
      <div class="container">
        <!-- <h1 class="title">Invest Page</h1> -->
        <p class="subtitle">
          My first investment layout with <strong>Bulma</strong>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InvestPage',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    padding: 1rem;
  }
</style>
