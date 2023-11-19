<template>
  <select ref="selectLang" @change="changeOption">
    <option
        v-for="option of options"
        :key="option.value"
        :value="option.value"
        :selected="option.value === selected"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script>
import {ref} from "vue";

export default {
  name: "mySelect",
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: String
  },

  methods: {
    changeOption(e) {
      this.$emit('changeSelect', e.target.value);
      this.$refs.selectLang.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  border: none;
  background-color: inherit;
}
</style>