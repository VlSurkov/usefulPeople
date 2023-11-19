<template>
  <div class="confirm">
    <h3>{{ $t('forms.confirm.title') }}</h3>
    <div class="answer">
      <my-button @click="$emit('delete')">{{ $t('forms.confirm.buttons.yes') }}</my-button>
      <my-button @click="$emit('close')">{{ $t('forms.confirm.buttons.no') }}</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myConfirm",

}
</script>

<style lang="scss" scoped>
.confirm {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .answer {
    display: flex;
    gap: 20px;
  }
}
</style>