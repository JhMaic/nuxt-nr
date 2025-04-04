<script setup lang="ts">
async function onClicked() {
  const data = await useFetch('/api/data')
  console.log(data)
}
</script>

<template>
  <h1>About</h1>
  <button @click="onClicked">
    click
  </button>
</template>
