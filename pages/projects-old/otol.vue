<template lang="pug">
  .container-project
    .container.typeset
      img(src="/img/otol_logo_green.png").logo
      h1 One Tree One Life Campaign
      .role
        h4 For this Borneo reforestation initiative, I was fortunate enough to work with Borneo Orangutan Survival Switzerland to create a brand and online presence.  
        ProjectInfo(agency="Freelance" client="Borneo Orangutan Survival" year="2017")
    .screenshots
       figure 
        img(src="/img/otol/otol1.jpg")
        figcaption Landing page with branding
       figure 
        img(src="/img/otol/otol2.jpg")
        figcaption Landing page
       figure 
        img(src="/img/otol/otol3.jpg")
        figcaption Video still
    .container.typeset
      h3 Responsibilities
      ul 
        li Branding
        li Web Design
        li Front-End Development (Jekyll, Forestry CMS)
        li Video Production, Editing & Music
        ExternalLink(link="https://one-tree-one-life.org/#campaign" text="One Tree One Life")
</template>

<script>
export default {
  layout: 'project'
}
</script>