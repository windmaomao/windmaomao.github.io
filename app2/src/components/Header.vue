<template>
  <nav class="navbar is-light is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item"><img src="../assets/logo.png"></a>
      <div class="navbar-burger burger" data-target="navbar" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" id="toc-button">
              <a class="button">
                <span>Table of Content &rarrb;</span>
              </a>
            </p>
            <p class="control has-icons-left">
              <span class="icon is-small is-left">&Tstrok;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  components: {}
}
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
.navbar {
  font-size: 16px;
}
.navbar p {
  margin: 1em 0;
}
</style>
