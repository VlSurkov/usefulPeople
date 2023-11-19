<template>
  <div class="content">
    <div v-if="selectedTab === '' || dates === undefined" class="help">
      <h1>{{ $t('content.title') }}</h1>
    </div>
    <div v-else class="dates">
      <div class="title">
        <h2>{{ selectedTab }}</h2>
      </div>
      <div class="dates__contacts">
        <h4 v-if="dates.categoryDates.length === 0">{{ $t('content.titleNote') }}</h4>
        <accordion
            v-else
            v-for="data of dates.categoryDates"
            :key="data.id"
            :contactId="data.id"
            :dates="data"

            @showEdit="showDialogEdit"
            @delete="deleteContact"
        />
      </div>
      <div class="dates__add">
        <my-button @click="$emit('showContact')">{{ $t('content.buttons.add') }}</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import accordion from "@/components/accordion.vue";

export default {
  name: "content",

  components: {
    accordion
  },

  emits: ['showEdit', 'delete', 'showContact'],

  props: {
    selectedTab: String,
    dates: {
      type: [Object, undefined]
    },
  },

  methods: {
    showDialogEdit(contactId) {
      this.$emit('showEdit', contactId);
    },

    deleteContact(contactId) {
      this.$emit('delete', contactId);
    },

  },
}
</script>

<style scoped>
@import "@/assets/content.scss";
</style>