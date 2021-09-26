<template lang="pug">
  .container-project
    .container
      h1 Patrick Frank
      .role
       h4 I designed and built the site for this renowned Zürich new music composer and entrepreneur using Nuxt.js and headless Wordpress. 
       ProjectInfo(agency="Freelance" client="Patrick Frank" year="2019")
    .screenshots 
      img(src="/img/patrick/patrick-home.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Web Design 
        li Front End Development (Nuxt.js, Wordpress, Netlify)
        ExternalLink(link="https://patrickfrank.ch" text="Patrick Frank Site")

</template>

<script>
export default {
  layout: 'project'
}
</script>