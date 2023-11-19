<template>
<button class="btn">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "myButton"
}
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid #b78585;
  background-color: inherit;
  padding: 6px;
  cursor: pointer;
  &:hover {
    background-color: #b78585;
    color: white;
  }
}
</style>