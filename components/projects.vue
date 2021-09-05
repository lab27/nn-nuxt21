<template lang="pug">
  section
    hr
    h3(id="projects-list") Select Projects
    ul.projects-list
      li(v-for="project in projects" @click="handleProjClick(project.link)" :class="{visited: visited.includes(project.link)}")
        span {{project.name}}
        span.year {{project.year}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  computed: {
    ...mapGetters({
      visited: 'visited'
    }),
    curProj() {
      const route = $nuxt.$route.path
      return route.replace('/projects/', '')
    }
  },
  data() {
    return {
      projects: [
        {name: 'Axpo Customer Portal', link: 'axpo', year: '2019-2021'},
        {name: 'Judit Polgar', link: 'judit-polgar', year: '2021'},
        {name: 'Plan Your Recovery', link: 'plan-your-recovery', year: '2014-2021'},
        {name: 'Patrick Frank', link: 'patrick-frank', year: '2019'},
        {name: 'Zurich Insurance', link: 'zurich', year: '2018-2019'},
        {name: 'One Tree One Life', link: 'otol', year: '2018'},
        {name: 'Collecture', link: 'collecture', year: '2018'},
        {name: 'Voice Republic', link: 'voice-republic', year: '2015-2017'},
        {name: 'Atfront Redesign', link: 'atfront', year: '2015'},
        {name: 'Cyverse', link: 'cyverse', year: '2015'},
        {name: 'Ed Boyer A Cappella', link: 'edboyer', year: '2015'},
        {name: 'Smart Home App', link: 'smarthome', year: '2014'},
        {name: 'North Face: Know Boundaries', link: 'knowboundaries', year: '2011'},
        {name: 'Assorted Graphic Design', link: 'various', year: '2012-Present'}
      ]
    }
  },
  methods: {
    handleProjClick(path) {
      this.$store.commit('addToVisited', path)
      this.$router.push(`/projects/${path}`)
    }
  }
}
</script>