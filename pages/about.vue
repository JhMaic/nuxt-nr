<script setup lang="ts">
function onClicked() {
  // const data = await useFetch('/api/data')
  // 都可以检测到
  throw new Error('Some type error')
}
</script>

<template>
  <h1>About</h1>
  <button @click="onClicked">
    click
  </button>
</template>
