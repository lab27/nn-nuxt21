<template lang="pug">
  section
    h3.section-title {{projAdjective}} Projects
    ul.list-work.list-interactive
      li(v-for="project, index in projects" :key="index" v-if="!$route.path.includes(project.link)")
        nuxt-link(:to="`/projects/${project.link}`" :class="{visited: visited.includes(`/projects/${project.link}`)}").flex.justify-between.w-full.cursor-pointer
          .name-wrapper
            GoArrow
            span(v-if="project.shortname && !isMedium") {{project.shortname}}
            span(v-else) {{project.name}} 
          span.year.text-gray-400 {{project.year}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  computed: {
    ...mapGetters({
      visited: 'visited'
    }),
    isHome() {
      return this.$route.path === '/'
    },
    isProjects() {
      return this.$route.path === '/projects'
    },

    isUniqueProject() {
      return this.$route.path.includes('/projects/')
    },
    projAdjective() {
      return this.isHome || this.isProjects ? 'Selected' : 'More'
    }
  },
  data() {
    return {
      projects: [
        {name: 'Axpo Customer Portal', shortname: 'Axpo', link: 'axpo', year: '2019-2023'},
        {name: 'Plan Your Recovery', shortname: 'P.Y.R.', link: 'pyr', year: '2014-2023'},
        // {name: 'Dodis', link: 'dodis', year: '2018'},
        // {name: 'Patrick Frank',  link: 'patrick-frank', year: '2019'},
        // {name: 'Zurich Insurance',  shortname: 'Zurich',  link: 'zurich', year: '2018-2019'},
        // {name: 'One Tree One Life',  link: 'otol', year: '2018'},
        {name: 'Collecture',  link: 'collecture', year: '2018'},
        {name: 'Voice Republic',   link: 'voice-republic', year: '2015-2017'},
        // {name: 'ZhdK Incubator', link: 'incubator', year: '2015'},
        {name: 'Atfront Redesign',  link: 'atfront', year: '2015'},
        // {name: 'Cyverse',  link: 'cyverse', year: '2015'},
        // {name: 'Ed Boyer A Cappella', shortname: 'Temp', link: 'edboyer', year: '2015'},
        // {name: 'Smart Home App', link: 'smarthome', year: '2014'},
        {name: 'White Risk',  link: 'whiterisk', year: '2011-2012'},
        // {name: 'North Face: Know Boundaries', shortname: 'North Face', link: 'knowboundaries', year: '2011'},
        // {name: 'Assorted Graphic Design', shortname: 'Various', link: 'various', year: '2012-Present'}
      ],
      isMedium: false
    }
  },
    watch: {
    $route(e) {
      this.$store.commit('addToVisited', e.path)
    },
  },
  methods: {
    getWindowWidth() {
      this.isMedium = window.innerWidth > 768
    }
  },
  mounted() {
    window.addEventListener('resize', this.getWindowWidth)
    this.getWindowWidth()
  }
}
</script>

<style>
svg.goArrow {
  height: 1em;
  position: relative;
  top: .25em;
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

ul.list-interactive li .name-wrapper span,
ul.list-interactive li .year

{
  transition: color .2s;
}

ul.list-interactive li:hover .name-wrapper span {
  transform: none;
  color: dodgerblue;
}
ul.list-interactive li:hover .year {
  color: dodgerblue;
}
ul.list-interactive li:hover .name-wrapper svg {
  transform: translateX(-.5em);
}

.goArrow {
  /* color: rgb(19, 255, 93); */
  color: dodgerblue;
}

</style>