<template lang="pug">
  .container-project
    .container
      h1 Assorted Graphic Design
      .role
       h4 Here's a collection of fun projects I've worked on over the years in web and print for artists, musicians, organizations and events. 
       ProjectInfo(agency="Freelance" client="Various" year="2012-Present")
    .screenshots 
      figure
        img(src="/img/various/camille1.jpg")
        figcaption Album cover
      figure
        img(src="/img/various/gestohlene_raeume.jpg")
        figcaption Art event poster
      figure
        img(src="/img/various/janine.jpg").tall
        figcaption Web design
      figure
        img(src="/img/various/harmonia.jpg").tall
        figcaption Music poster
      figure
        img(src="/img/various/origins.png").tall
        figcaption Music poster
      figure
        img(src="/img/various/seachange.jpg")
        figcaption Band art
      figure
        img(src="/img/various/saudade.jpg")
        figcaption Music poster
      figure
        img(src="/img/various/ss6.svg" style="width: 300px;")
        figcaption Logo
      figure
        img(src="/img/various/otol-old.png")
        figcaption Logo
      figure
        img(src="/img/various/aston.jpg")
        figcaption Branding
      figure
        img(src="/img/various/lastrada1.jpg").tall
        figcaption Music poster
      figure
        img(src="/img/various/lastrada2.jpg").tall
        figcaption Music poster
      figure
        img(src="/img/various/bumbug.jpg")
        figcaption Theater branding


</template>

<script>
export default {
  layout: 'project'
}
</script>