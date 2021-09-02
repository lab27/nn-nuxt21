<template lang="pug">
  footer
    p &copy; {{year}} Nick Niles
</template>

<script>
export default {
  computed: {
    year() {
      
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #2e2e2e;
  color: white;
  padding: 2rem;
  margin-top: 10rem;
}
</style>