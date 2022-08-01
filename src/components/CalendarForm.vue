<template>
  <!-- <Calendar /> -->
  <v-calendar />
  <!-- <DatePicker v-model="date" /> -->
  <v-date-picker v-model="date" />
  <p>
    {{ date }}
  </p>
</template>
<script>
import 'v-calendar/dist/style.css';
export default {
  computed: {
    date: function(){
      return new Date();
    }
  }
}
</script>