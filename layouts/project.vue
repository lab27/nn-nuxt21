<template lang="pug">
  main.project
    TopBar.project-topbar
    nuxt
    //- .backToTop(@click="handleTop") &uarr; Back to Top
    //- MoreProjects(v-if="unViewedProjects.length")
    Footer
</template>

<script>
export default {
  computed: {
    unViewedProjects() {
      // return this.$store.state.unViewedProjects
    }
  },
  methods: {
    handleTop() {
      window.scroll({
      top: 0,
      behavior: "smooth"
      });
    }
  }
}
</script>