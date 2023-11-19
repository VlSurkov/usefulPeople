<template>
  <form @submit.prevent>
    <h4>{{ $t('forms.category.title') }}</h4>
    <div v-if="err" class="err">
      {{ $t('forms.category.err') }}
    </div>
    <input
        v-model="title"
        type="text"
        :placeholder="$t('forms.category.placeholders.name')"
        :class="{'input__error': err}"
    >
    <my-button
        @click="createCategory"
    >
      {{ $t('forms.category.buttons.add') }}
    </my-button>
  </form>
</template>

<script>
export default {
  name: "categoryForm",
  emits: ['createCategory'],
  data() {
    return {
      title: '',
      err: false
    }
  },
  methods: {
    createCategory() {
      if (this.title !== '') {
        let category = {};
        category.id = String(Date.now());
        category.title = this.title;
        category.dates = [];
        this.$emit('createCategory', category);
      } else {
        this.err = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  button {
    align-self: center;
  }

  .err {
    align-self: center;
    color: red;
  }

  input {
    padding: 5px;
  }

  .input__error {
    border: 1px solid red
  }
}


</style>