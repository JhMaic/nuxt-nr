<script setup lang="ts">
async function onClicked() {
  useBrowserAgent().value.noticeError(new Error('Error Page Accessed'))
}
</script>

<template>
  <h1>Error</h1>
  <button @click="onClicked">
    error alert
  </button>
</template>
