<template>
  <div id="stocker">
    <div class="control autocomplete">
      <input class="input is-small" type="text" placeholder="Stock Symbol">
      <ul class="autocomplete-results">
        <li>
          <span>ADSK</span>: +3.4%
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stocker',
  props: {},
  data: () => ({
  }),
  created() {
  }
}
</script>
