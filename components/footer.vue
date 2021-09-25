<template lang="pug">
  footer
    span &copy; {{year}} Nick Niles
    a(href="mailto:nick@nickniles.com") nick@nickniles.com
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
  display: flex;
  justify-content: space-between
}
</style>