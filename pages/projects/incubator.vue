<template lang="pug">
  .container-project
    .container
      img(src="/img/incubator/ZHdK_Logo.svg").logo
      h1 Z-Incubator
      .role
       h4 Together with my wife, Suvi Westerberg, I designed and animated this marketing video for Zürich University Art's startup incubator.
       ProjectInfo(agency="Sisu Films" client="ZhdK Incubator for Cultural Entrepreneurship" year="2015")
    .screenshots 
      incubatorVideo
      //- img(src="/img/pyr/division.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Project Management
        li Script Writing
        li Design &amp; Illustration 
        li 2D &amp; 3D Animation
        li Motion Graphics 
        li Voice Narration
        li Audio Production

</template>

<script>
export default {
  layout: 'project'
}
</script>