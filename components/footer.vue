<template lang="pug">
  footer
    .thin-line
    .footer-content
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

<style>
footer {
  padding: 2rem;
  margin-top: 6rem;
}

footer .footer-content {
    display: flex;
    padding-top: 2rem;
  justify-content: space-between
}
</style>