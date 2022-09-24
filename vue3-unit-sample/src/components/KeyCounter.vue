<template>
  <input
    type="text"
    v-model="state.count"
    data-testid="inputCount"
    @keydown.prevent="onKeydown"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    })

    const clear = () => {
      state.count = 0
    }

    const onKeydown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowUp':
          state.count = state.count + 5
          break;
        case 'ArrowDown':
          state.count = state.count - 5
          break;
        case 'ArrowRight':
          state.count = state.count + 1
          break;
        case 'ArrowLeft':
          state.count = state.count - 1
          break;
        default:
          clear()
          break;
      }
    }

    return {
      state,
      onKeydown,
    }
  },
})
</script>