<template>
  <div class="app">
    <div class="container">
      <my-dialog v-model:show="dialogCategory">
        <category-form
            @createCategory="createCategory"
        />
      </my-dialog>
      <my-dialog v-model:show="edit.dialogEdit">
        <contacts-form
            :contact="edit.EditContact"

            @save="changeContact"
            @createCategory="createCategory"
        />
      </my-dialog>
      <my-dialog v-model:show="dialogContacts">
        <contacts-form
            @save="saveContact"
            @createCategory="createCategory"
        />
      </my-dialog>
      <sidebar
          :categories="categories"
          :selected-tab="selectedTab"

          @select="selectTab"
          @show="showDialogCategory"
          @change="changeCategory"
          @delete="deleteCategory"
      />
      <content
          :dates="category"
          :selected-tab="selectedTab"

          @showEdit="showDialogEdit"
          @showContact="showDialogContacts"
          @delete="deleteContact"
      />
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";
import content from "@/components/content.vue";
import categoryForm from "@/components/categoryForm.vue";
import contactsForm from "@/components/contactsForm.vue";
import {useI18n} from "vue-i18n";

export default {
  components: {
    sidebar,
    content,
    categoryForm,
    contactsForm
  },

  data() {
    return {
      categories: [
        {
          id: 1,
          title: 'категория 1',
          dates: [
            {
              id: 11,
              name: 'john',
              use: 'programmer1',
              contacts: {
                number: [
                  '+79175553322',
                  '89175553452',
                ],
                telegram: [
                  'https://t.me/username1'
                ],
                emails: [
                  'programmer1@.gmail.com'
                ],
                links: [
                  'https://code.mu/ru/',
                  'https://code.mu/ru/',
                ]
              }
            },
            {
              id: 12,
              name: 'john6',
              use: 'programmer2',
              contacts: {
                number: [
                  '89175553322',
                  '89175553452',
                ],
                telegram: [
                  'https://t.me/username2'
                ],
                emails: [
                  'programmer2@.gmail.com'
                ],
                links: [
                  'https://code.mu/',
                ]
              }
            },
          ]
        },
        {
          id: 2,
          title: 'категория 2',
          dates: [
            {
              id: 21,
              name: 'john2',
              use: 'programmer3',
              contacts: {
                number: [
                  '89175553322',
                  '89175553452',
                ],
                telegram: [
                  'https://t.me/username3'
                ],
                emails: [
                  'programmer3@.gmail.com'
                ],
                links: [
                  'https://code.mu/',
                ]
              }
            }
          ]
        },
        {
          id: 3,
          title: 'категория 3',
          dates: [
            {
              id: 31,
              name: 'john3',
              use: 'programmer4',
              contacts: {
                number: [
                  '89175553322',
                  '89175553452',
                ],
                telegram: [
                  'https://t.me/username4'
                ],
                emails: [
                  'programmer4@.gmail.com'
                ],
                links: [
                  'https://code.mu/',
                ]
              }
            }
          ]
        },
        {
          id: 4,
          title: 'категория 4',
          dates: [
            {
              id: 41,
              name: 'john4',
              use: 'programmer5',
              contacts: {
                number: [
                  '89175553322',
                  '89175553452',
                ],
                telegram: [
                  'https://t.me/username5'
                ],
                emails: [
                  'programmer5@.gmail.com'
                ],
                links: [
                  'https://code.mu/',
                ]
              }
            }
          ]
        },
        {
          id: 5,
          title: 'категория 5',
          dates: [
            {
              id: 51,
              name: 'john5',
              use: 'doctor',
              contacts: {
                number: [
                  '89175553322',
                  '89175553452',
                ],
                telegram: [
                  'https://t.me/doctor'
                ],
                emails: [
                  'doctor@.gmail.com'
                ],
                links: [
                  'https://code.mu/',
                ]
              }
            }
          ]
        }
      ],
      selectedTab: '',
      dialogCategory: false,
      edit: {
        dialogEdit: false,
        EditContact: '',
      },
      dialogContacts: false,
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    }
    ,

    showDialogCategory() {
      this.dialogCategory = true;
    }
    ,

    showDialogEdit(contactId) {
      this.edit.EditContact = this.categories[this.category.categoryId].dates.find(data => {
        if (data.id === contactId) {
          return data;
        }
      })

      this.edit.dialogEdit = true;
    }
    ,

    showDialogContacts() {
      this.dialogContacts = true;
    }
    ,

    saveContact(id, newName, newUse, newNumber, newTelegram, newEmail, newLink) {
      let contact = {
        id: id,
        name: newName,
        use: newUse,
        contacts: {
          number: newNumber,
          telegram: newTelegram,
          emails: newEmail,
          links: newLink
        }
      }
      this.categories[this.category.categoryId].dates.push(contact);
      this.dialogContacts = false;
    }
    ,

    changeContact(id, newName, newUse, newNumber, newTelegram, newEmail, newLink) {
      this.categories[this.category.categoryId].dates = this.categories[this.category.categoryId].dates.map(contact => {
        if (contact.id === id) {
          contact.name = newName;
          contact.use = newUse;
          contact.contacts.number = newNumber;
          contact.contacts.telegram = newTelegram;
          contact.contacts.emails = newEmail;
          contact.contacts.links = newLink;

        }
        return contact;
      })

      this.edit.dialogEdit = false;
    }
    ,

    deleteContact(contactId) {
      this.categories[this.category.categoryId].dates = this.categories[this.category.categoryId].dates.filter(contact => {
        if (contact.id !== contactId) {
          return contact;
        }
      })
    }
    ,

    createCategory(category) {
      this.selectedTab = category.title;
      this.dialogCategory = false;

      this.categories.push(category)
    }
    ,

    changeCategory(id, newTitle) {
      this.categories = this.categories.map(category => {
        if (category.id === id) {
          category.title = newTitle;
        }
        return category;
      })
    }
    ,

    deleteCategory(id) {
      this.categories = this.categories.filter(category => {
        if (category.id !== id) {
          return category;
        }
      });
    }
    ,
  }
  ,

  computed: {
    category: function () {
      for (let category of this.categories) {
        if (category.title === this.selectedTab) {
          return {categoryId: this.categories.indexOf(category), categoryDates: category.dates};
        }
      }
    }
  }
  ,

  setup(props) {
    const {t, locale} = useI18n({useScope: 'global'});
    return {t, locale}
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";
</style>
