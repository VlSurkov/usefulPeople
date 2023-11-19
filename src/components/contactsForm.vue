<template>
  <form @submit.prevent>
    <div class="title">
      <h4>{{ $t('forms.contact.titles.name') }}</h4>
      <input
          v-model="newName.name"
          type="text"
          :placeholder="$t('forms.contact.placeholders.name')"
      >
    </div>
    <div class="title">
      <h4>{{ $t('forms.contact.titles.use') }}</h4>
      <input
          v-model="newUse.use"
          type="text"
          :placeholder="$t('forms.contact.placeholders.use')"
      >
    </div>
    <div class="title">
      <h4>{{ $t('forms.contact.titles.number') }}</h4>
      <input
          v-model="newContact.number"
          type="text"
          :placeholder="$t('forms.contact.placeholders.number')"
      >
    </div>
    <div class="title">
      <h4>{{ $t('forms.contact.titles.telegram') }}</h4>
      <input
          v-model="newContact.telegram"
          type="text"
          :placeholder="$t('forms.contact.placeholders.telegram')"
      >
    </div>
    <div class="title">
      <h4>{{ $t('forms.contact.titles.email') }}</h4>
      <input
          v-model="newContact.email"
          type="text"
          :placeholder="$t('forms.contact.placeholders.email')"
      >
    </div>
    <div class="title">
      <h4>{{ $t('forms.contact.titles.links') }}</h4>
      <input
          v-model="newContact.link"
          type="text"
          :placeholder="$t('forms.contact.placeholders.links')"
      >
    </div>
    <my-button @click="saveContact">{{ $t('forms.contact.buttons.save') }}</my-button>
  </form>
</template>

<script>
export default {
  name: "contactsForm",

  props: {
    contact: Object
  },

  computed: {
    contactId: function () {
      return this.contact ? this.contact.id : String(Date.now());
    },
    newName: function () {
      return this.contact ? {name: this.contact.name} : {name:''};
    },
    newUse: function () {
      return this.contact ? {use: this.contact.use} : {use:''};
    },
    newContact: function () {

      if (this.contact) {

        return {
                  number: this.contact.contacts.number.join(','),
                  telegram: this.contact.contacts.telegram.join(','),
                  email: this.contact.contacts.emails.join(','),
                  link: this.contact.contacts.links.join(',')
                };
      } else {
        return {
                  number: '',
                  telegram: '',
                  email: '',
                  link: ''
                };
      }
    },
  },

  methods: {
    saveContact() {
      let newNumber = this.newContact.number.split(',');
      let newTelegram = this.newContact.telegram.split(',');
      let newEmail = this.newContact.email.split(',');
      let newLink = this.newContact.link.split(',');

      this.$emit('save', this.contactId, this.newName.name, this.newUse.use, newNumber, newTelegram, newEmail, newLink);
    }
  },
}
</script>

<style scoped>
@import '@/assets/contactsForm.scss';
</style>