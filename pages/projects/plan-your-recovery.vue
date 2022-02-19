<template lang="pug">
  .container-project
    .container
      img(src="/img/pyr/pyr-logo-wing.svg").logo
      h1 Plan Your Recovery
      .role
       h4 For almost a decade, I've been working closely with Plan Your Recovery on the branding, marketing and online presence of their addiction treatment clinic and educational platform, mostly on a pro-bono basis. 
       ProjectInfo(agency="Freelance" client="Plan Your Recovery" year="2012-2021")
    .screenshots 
      figure
        img(src="/img/pyr/pyrweb.jpg")
        figcaption Front page of the website.
      figure
        img(src="/img/pyr/pinball.jpg")
        a(href="https://www.youtube.com/watch?v=hg09_-89caY" target="_blank").vidLink
          svg(v-svg symbol="playButton")
        figcaption Still from <em>Understanding Addiction: The Gas and Brakes of Human Motivation</em>
      figure
        img(src="/img/pyr/archie.jpg")
        a(href="https://www.youtube.com/watch?v=iHJ6K4VQvrw" target="_blank").vidLink
          svg(v-svg symbol="playButton")
        figcaption Still from <em>Medication Assisted Treatment: Methadone Testimonial</em>

      figure
        img(src="/img/pyr/rockbottom.jpg")
        a(href="https://www.youtube.com/watch?v=MxO164ADK7Y" target="_blank").vidLink
          svg(v-svg symbol="playButton")
        figcaption Still from <em>Beyond Rock Bottom: Medication Assisted Treatment</em>

      //- img(src="/img/pyr/division.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Branding & Corporate Design
        li Web & Graphic Design 
        li Front End Development (Nuxt.js, Netlify CMS)
        li Video Production & Editing
        li Music, Audio & Narration
        li Motion Graphics 
        ExternalLink(link="https://planyourrecovery.com" text="Plan Your Recovery Site")
        ExternalLink(link="https://www.youtube.com/c/Planyourrecovery" text="Plan Your Recovery YouTube Channel")

</template>

<script>
export default {
  layout: 'project'
}
</script>