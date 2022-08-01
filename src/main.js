import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
// import 'v-calendar/dist/style.css';
// import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';
import VCalendar from 'v-calendar';

library.add(faHeart)
createApp(App).use(router,VCalendar, {}).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
// App.use(SetupCalendar, {})
// App.component('CalendarForm', Calendar)
// App.component('DatePicker', DatePicker)
// App.use(VCalendar, {})