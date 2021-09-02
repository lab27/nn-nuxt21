<template lang="pug">
  .typeset
    .topbar
      nuxt-link(to="/").name Nick Niles
    nuxt
    br
    br
    .container
      Projects
    Footer
</template>

<script>
import Projects from '~/components/projects'
import Footer from '~/components/footer'
export default {
  components: {
    Projects,
    Footer
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.name {
  font-weight: 500;
}

.topbar {
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 3rem;
}
</style>