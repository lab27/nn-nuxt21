<template lang="pug">
  .container-project
    .container
      h1 Judit Polgar
      .role
       h4 I had the pleasure of designing and building a simple site for the renowned Zürich-based pianist.
       ProjectInfo(agency="Freelance" client="Judit Polgar" year="2021")
    .screenshots 
      img(src="/img/judit/judit-home.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Web Design 
        li Front End Development (11ty, Netlify CMS)
        ExternalLink(link="https://juditpolgar.ch" text="Judit Polgar Site")

</template>

<script>
export default {
  layout: 'project'
}
</script>