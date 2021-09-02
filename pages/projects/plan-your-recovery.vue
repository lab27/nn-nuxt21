<template lang="pug">
  .container-project
    .container
      img(src="/img/pyr/pyr-logo-wing.svg").logo
      h1 Plan Your Recovery
      .role
       h4 For almost a decade, I've been working closely with my friend 
        a(href="https://twitter.com/NedPresnall" target="_blank") Ned
        |  on the branding, marketing and online presence of his addiction treatment clinic and educational platform. 
       ProjectInfo(agency="Freelance" client="Plan Your Recovery" year="2012-2021")
    .screenshots 
      img(src="/img/pyr/pyrweb.jpg")
      img(src="/img/pyr/pinball.jpg")
      img(src="/img/pyr/archie.jpg")
      img(src="/img/pyr/rockbottom.jpg")
      //- img(src="/img/pyr/division.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Branding & Corporate Design
        li Web & Graphic Design 
        li Front End Development (Nuxt.js, Netlify CMS)
        li Video Production & Editing
        li Motion Graphics 
      ExternalLink(link="https://planyourrecovery.com" text="Plan Your Recovery Site")
      ExternalLink(link="https://www.youtube.com/c/Planyourrecovery" text="Plan Your Recovery YouTube Channel")

</template>

<script>
export default {
  layout: 'project'
}
</script>