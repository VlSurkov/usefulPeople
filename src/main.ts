import { createApp } from 'vue'
import App from './App.vue'
import {createI18n, useI18n} from "vue-i18n";
import components from '@/components/UI/index.ts';
import {languages, defaultLocal} from "@/i18n";

const app = createApp(App, {
    setup() {
        const {t} = useI18n();
        return {t};
    }
});

const messages = Object.assign(languages);
const i18n: any = createI18n({
    legacy: false,
    locale: defaultLocal,
    fallbackLocale: 'ru',
    messages
})



components.forEach(component => {
    app.component(component.name, component);
});
app.use(i18n as any);
app.mount('#app');

