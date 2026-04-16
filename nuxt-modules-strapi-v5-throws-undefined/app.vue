<script lang="ts" setup>
const { find } = useStrapi()

useAsyncData(() => find('test')) // SSR will crash
</script>

<template>
  test
</template>
