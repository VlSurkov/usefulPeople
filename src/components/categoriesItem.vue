<template>
  <div class="category__item">
    <div class="category">
      <my-dialog v-model:show="dialogConfirm">
        <my-confirm
            @delete="deleteContact"
            @close="closeDialog"
        >

        </my-confirm>
      </my-dialog>
      <div class="categories__text"
           @click="$emit('select', title)"
           :class="{'selected': title === selectedTab}"
      >
        <div
            class="text"
            v-if="!isEdit"
            @click="$emit('open', id)"
            @dblclick="edit"
        >
          {{ title }}
        </div>
        <div v-else>
          <input
              type="text"
              v-model="newTitle"
              @keydown.enter="save"
          >
        </div>
      </div>
    </div>
    <button
        class="categories__delete"
        @click="showDialogDelete"
    >
      <img src="../assets/img/delete.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "categoriesItem",
  emits: ['change', 'select', 'delete', 'open'],
  props: {
    id: [String, Number],
    title: String,
    selectedTab: String,
  },

  data() {
    return {
      isEdit: false,
      newTitle: this.title,
      dialogConfirm: false
    }
  },

  methods: {
    edit() {
      this.isEdit = true
    },

    save() {
      this.isEdit = false;
      this.$emit('change',this.id, this.newTitle)
    },
    showDialogDelete() {
      this.dialogConfirm = true;
    },

    closeDialog() {
      this.dialogConfirm = false;
    },

    deleteContact() {
      this.$emit('delete', this.id);
    },
  },
}
</script>

<style scoped>
@import "@/assets/category.scss";
</style>