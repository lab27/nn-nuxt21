<template lang="pug">
  .container-project
    .container
      h1 Assorted Graphic Design
      .role
       h4 Here's a smattering of fun projects I've worked on over the years in web and print for artists, musicians, organizations and events. 
       ProjectInfo(agency="Freelance" client="Various" year="2012-Present")
    .screenshots 
      img(src="/img/various/camille1.jpg")
      img(src="/img/various/gestohlene_raeume.jpg")
      img(src="/img/various/janine.jpg").tall
      //- img(src="/img/various/finlandia.jpg").tall
      img(src="/img/various/harmonia.jpg").tall
      //- img(src="/img/various/camille2.jpg")
      img(src="/img/various/origins.png").tall
      img(src="/img/various/seachange.jpg")
      img(src="/img/various/saudade.jpg")
      img(src="/img/various/ss6.svg")
      img(src="/img/various/otol-old.png")
      img(src="/img/various/aston.jpg")
      img(src="/img/various/lastrada1.jpg").tall
      img(src="/img/various/lastrada2.jpg").tall
      //- img(src="/img/various/eyes.jpg")
      img(src="/img/various/bumbug.jpg")


</template>

<script>
export default {
  layout: 'project'
}
</script>