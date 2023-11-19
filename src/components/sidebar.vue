<template>
  <div class="sidebar">
    <div class="categories__lang">
      <img :src="selectedLang" alt="">
      <my-select
          :selected="selectedOption"
          :options="langOptions"

          @changeSelect="changeLang"
      />
    </div>
    <h4 class="title" v-if="categories.length === 0">{{$t('sidebar.titleAdd')}}</h4>
    <div class="categories" v-else>
      <h4 class="title">{{$t('sidebar.title')}}</h4>
      <div class="categories__item">
        <categories-item
            v-for="category of categories"
            :key="category.id"
            :id="category.id"
            :title="category.title"
            :selectedTab="selectedTab"

            @select="selectTab"
            @change="change"
            @delete="deleteCategory"
            @open="openCategory"
        />
      </div>
    </div>
    <my-button
        @click="$emit('show')"
    >
      {{ $t('sidebar.buttons.add') }}
    </my-button>
  </div>
</template>

<script>
import categoriesItem from "@/components/categoriesItem.vue";
import {useI18n} from "vue-i18n/dist/vue-i18n";

export default {
  name: "sidebar",
  components: {
    categoriesItem
  },
  emits: ['select', 'show', 'change', 'delete', 'open'],
  props: {
    categories: {
      type: Array
    },
    selectedTab: String
  },

  data() {
    return {
      langOptions: [
        {
          value: "ru", name: 'src/assets/img/langRu.svg'
        },
        {
          value: "en", name: 'src/assets/img/langEn.svg'
        }
      ],
    }
  },

  methods: {
    selectTab(tab) {
      this.$emit('select', tab);
    },

    change(id, newTitle) {
      this.$emit('change', id, newTitle)
    },

    deleteCategory(id) {
      this.$emit('delete', id);
    },
    openCategory(id) {
      this.$emit('open', id);
    },

    changeLang(lang) {
      this.locale = lang;
    }
  },

  computed: {
    selectedOption () {
      for (let option of this.langOptions) {
        if (option.value === this.locale) {
          return option.name;
        }
      }
    },

    selectedLang() {
      for (let option of this.langOptions) {
          if (option.value === this.locale) {
            return option.name;
          }
        }
    }
  },

  setup(props) {
    const {locale} = useI18n({useScope: 'global'});
    return {locale}
  }
}
</script>

<style scoped>
@import "@/assets/sidebar.scss";
</style>