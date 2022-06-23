<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="false">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '初めてのVue.jsアプリです！',
      subtitle: 'ようこそ'
    }
  }
}
</script>