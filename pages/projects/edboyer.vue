<template lang="pug">
  .container-project
    .container
      h1 Ed Boyer A Cappella
      .role
       h4 I designed and built this simple brochure site for my friend Ed, the grammy-winning recording engineer.
       ProjectInfo(agency="Freelance" client="Ed Boyer" year="2015")
    .screenshots 
      img(src="/img/edboyer/edboyer-home.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Web Design 
        li Illustration
        li Front End Development (Assemble SSG, Gulp.js)
      ExternalLink(link="http://edboyeracappella.com/" text="Ed Boyer A Cappella")

</template>

<script>
export default {
  layout: 'project'
}
</script>