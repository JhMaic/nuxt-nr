<template>
  <li>
    <!--    only get recorded on local running -->
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/home">
      Home
    </NuxtLink>
    <NuxtLink to="/error">
      Error
    </NuxtLink>
  </li>
  <div>
    <NuxtPage />
  </div>
</template>
