<template lang="pug">
  .container-project
    .container
      img(src="/img/northface/northface-logo.svg").logo
      h1 Know Boundaries
      .role
       h4 This was my first project when I joined Atfront in Zürich. A microsite for The North Face, dedicated to avalanche safety and prevention. I designed the visual and interactive concept as well as the technical solution using parallax and JavaScript "waypoints" techniques that were pretty new at the time.
       ProjectInfo(agency="Atfront" client="The North Face" year="2011")
    br
    br
    Northface
    .typeset.container
      h3 Responsibilities
      ul 
        li UI Design
        li 3D Design 
        li Front End Development (jQuery)
</template>

<script>
import Northface from '~/components/videos/northface'
export default {
  components: {
    Northface
  },
  layout: 'project'
}
</script>