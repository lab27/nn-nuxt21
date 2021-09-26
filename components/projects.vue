<template lang="pug">
  section
    h3.section-title Selected Projects
    ul.list-work.list-interactive
      li(v-for="project, index in projects" :key="index")
        nuxt-link(:to="`/projects/${project.link}`" :class="{visited: visited.includes(`/projects/${project.link}`)}").flex.justify-between.w-full.cursor-pointer
          .name-wrapper
            GoArrow
            span {{project.name}}
          span.year.text-gray-400 {{project.year}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  computed: {
    ...mapGetters({
      visited: 'visited'
    }),
  },
  data() {
    return {
      projects: [
        {name: 'Axpo Customer Portal', link: 'axpo', year: '2019-2021'},
        // {name: 'Judit Polgar', link: 'judit-polgar', year: '2021'},
        {name: 'Plan Your Recovery', link: 'plan-your-recovery', year: '2014-2021'},
        {name: 'DODIS', link: 'dodis', year: '2018'},
        // {name: 'Patrick Frank', link: 'patrick-frank', year: '2019'},
        {name: 'Zurich Insurance', link: 'zurich', year: '2018-2019'},
        {name: 'One Tree One Life', link: 'otol', year: '2018'},
        {name: 'Collecture', link: 'collecture', year: '2018'},
        {name: 'Voice Republic', link: 'voice-republic', year: '2015-2017'},
        {name: 'ZhdK Incubator', link: 'incubator', year: '2015'},
        {name: 'Atfront Redesign', link: 'atfront', year: '2015'},
        {name: 'Cyverse', link: 'cyverse', year: '2015'},
        // {name: 'Ed Boyer A Cappella', link: 'edboyer', year: '2015'},
        {name: 'Smart Home App', link: 'smarthome', year: '2014'},
        {name: 'White Risk', link: 'whiterisk', year: '2011-2012'},
        {name: 'North Face: Know Boundaries', link: 'knowboundaries', year: '2011'},
        {name: 'Assorted Graphic Design', link: 'various', year: '2012-Present'}
      ]
    }
  },
    watch: {
    $route(e) {
      console.log('route', e);
      this.$store.commit('addToVisited', e.path)
    },
  },
}
</script>

<style>
svg.goArrow {
  height: 1.5rem;
  position: relative;
  top: .24em;
  transform: translateX(-1em);
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  float: left;
}

.name-wrapper {
  overflow: hidden;
}

.name-wrapper span {
  position: relative;
  display: inline-block;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: translateX(-.5em);
}

ul.list-interactive li {
  cursor: pointer;
}
ul.list-interactive li:hover .name-wrapper span {
  transform: none;
}
ul.list-interactive li:hover .name-wrapper svg {
  transform: translateX(-.5em);
}


</style>