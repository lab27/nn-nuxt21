<template lang="pug">
  .container-project
    .container
      img(src="/img/dodis/dodis-logo.svg").logo
      h1 Diplomatic Documents of Switzerland
      .role
       h4 Dodis is a Swiss governmental research facility, focussing on the history of Swiss foreign policy and international relations after the establishing of the Swiss Confederation in 1848. I worked closely with the top researchers there to create this marketing film for their work.
       ProjectInfo(agency="Freelance" client="Dodis" year="2018")
    .screenshots 
      DodisVideo
      //- img(src="/img/pyr/division.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Project Management
        li Script Consulting
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