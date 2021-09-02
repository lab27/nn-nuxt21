<template lang="pug">
  section
    hr
    h3(id="projects-list") Select Projects
    ul.projects-list
      li(v-for="project in projects" v-if="curProj !== project.link")
        nuxt-link(:to="`/projects/${project.link}`") 
          span {{project.name}}
          span.year {{project.year}}
</template>

<script>
export default {
  computed: {
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
        {name: 'Assorted Graphic Design', link: 'various', year: '2012-Present'}
      ]
    }
  },
  mounted() {
    console.log();
  }
}
</script>