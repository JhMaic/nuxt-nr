<template>
  <h1>About</h1>
  <button @click="onClicked">click</button>
</template>

<script setup lang="ts">
const onClicked = async ()=>{
  const data = await useFetch('/api/data');
  console.log(data);
}
</script>