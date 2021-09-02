<template lang="pug">
  .container-project
    .container
      h1 Smart Home App
      .role
        h4 This app for an energy-saving smart home solution never saw the light of day. But we had lots of fun working on it. Below are a just a few of the hundreds of UI mockups I created for the concept.  
        ProjectInfo(agency="Atfront" year="2014")
    .screenshots 
      img(src="/img/smarthome/smarthome1.jpg").tall
      img(src="/img/smarthome/smarthome2.jpg").tall
      img(src="/img/smarthome/smarthome3.jpg").tall
    .typeset.container
      h3 Responsibilities
      ul 
        li UX/UI Design & Prototyping
        li Design System Development

</template>

<script>
import ExternalLink from '~/components/externalLink'
import ProjectInfo from '~/components/projectInfo'
export default {
  components: {
    ExternalLink,
    ProjectInfo
  },
  layout: 'project'
}
</script>