<template>
  <div class="accordion">
    <my-dialog v-model:show="dialogConfirm">
      <my-confirm
        @delete="deleteContact"
        @close="closeDialog"
      >

      </my-confirm>
    </my-dialog>
    <div
        class="accordion__item"
        :class="styles"
    >
      <div class="accordion__header" @click="setActive">
        {{ dates.name }} - {{ dates.use }}
      </div>
      <div class="accordion__body">
<!--        TODO: table сделать отделным компонентом-->
        <table>
          <tr>
            <td>{{ $t('content.contact.name') }}</td>
            <td>{{ dates.name }}</td>
          </tr>
          <tr>
            <td>{{ $t('content.contact.use') }}</td>
            <td>{{ dates.use }}</td>
          </tr>
          <tr>
            <td class="contacts" colspan="2">{{ $t('content.contact.title') }}</td>
          </tr>
          <tr>
            <td>{{ $t('content.contact.number') }}</td>
            <td>
              <div class="number" v-for="number of dates.contacts.number">
                <a :href="'tel:'+number">{{ number }}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>{{ $t('content.contact.telegram') }}</td>
            <td>
              <div class="telegram" v-for="telegram of dates.contacts.telegram">
                <a :href="telegram">{{ telegram }}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>{{ $t('content.contact.email') }}</td>
            <td>
              <div class="email" v-for="email of dates.contacts.emails">
                <a :href="'mailto:' + email">{{ email }}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>{{ $t('content.contact.links') }}</td>
            <td>
              <div class="links" v-for="link of dates.contacts.links">
                <a :href="link">{{ link }}</a>
              </div>
            </td>
          </tr>
        </table>
        <div class="buttons">
          <my-button @click="$emit('showEdit', contactId)">{{ $t('content.buttons.edit') }}</my-button>
          <my-button @click="showDialogDelete">{{ $t('content.buttons.delete') }}</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "accordion",

  emits: ['showEdit', 'delete'],
  props: {
    dates: {
      type: Object,
    },
    contactId: [String, Number]
  },

  data() {
    return {
      styles: {
        accordion__item_show: false
      },
      dialogConfirm: false
    }
  },

  methods: {
    setActive() {
      this.styles.accordion__item_show = !this.styles.accordion__item_show
    },
    showDialogDelete() {
      this.dialogConfirm = true;
    },

    closeDialog() {
      this.dialogConfirm = false;
    },

    deleteContact() {
      this.$emit('delete', this.contactId)
    },
  },
}
</script>

<style scoped>
@import '@/assets/accordion.scss';
</style>