<template>
  <div id="stocker">
    <div class="control autocomplete">
      <input class="input is-small"
        type="text" placeholder="Stock Symbol"
        v-model="search" @input="onChange"
      />
      <ul class="autocomplete-results" v-show="active">
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
    active: false,
    search: ''
  }),
  created() {
  },
  methods: {
    onChange() {
      this.active = true
    }
  }
}
</script>
