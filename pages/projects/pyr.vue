<template lang="pug">
  .container.container-project
    h1 Plan Your Recovery
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p Plan Your Recovery is a St. Louis-based clinic providing personalized treatment for alcohol, drug, and behavioral addictions in-person and by tele-health. I've been working with them for almost a decade, providing branding, marketing, video and web design/development services pro bono.
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li Branding & Corporate Design
          li Web & Graphic Design 
          li Front End Development (Nuxt.js, Netlify CMS)
          li Video Production & Editing
          li Music, Audio & Narration
          li Motion Graphics 
        //- ExternalLink(link="https://axpo.com" text="Axpo")
    .examples
      h3 Examples
      .screenshots
        figure 
          img(src="/img/pyr/pyr-logo.png")
          figcaption My logo design for the company. The hand-drawn wing represents the sense of liberation that comes with unshackling oneself from addiction. The artisanal quality of the shape is meant to evoke the boutique nature of the clinic and underscore the personal, human experience at the heart of Plan Your Recovery's work.
        figure 
          img(src="/img/pyr/fonts-colors.png")
          figcaption In addition to eliciting a sense of trust for visitors to the site, it was important to create a mood of warmth, hospitality and health through the use of color, typography and a minimalist, spacious layout, giving the content plenty of room to breathe. 
        figure
          <div style="padding:76% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658667243?h=f245e82e54&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Voice Republic Stage Controller Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption The content on the site is very informative, and the language is gentle and reassuring because it reflects the generous spirit of its founder and practitioners. I chose a design approach that would provide a simple frame for the words and ideas, rendering them legible and attractive, and staying out of their way. 
        figure
          <div style="padding:57% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658671671?h=030c302b82&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Gas and Brakes of Addiction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption To support the mission of the clinic and spread awareness around the psychological causes of addiction, I created this animated video, entitled "Understanding Addiction: The Gas and Brakes of Human Motivation," which has been <a href="https://youtu.be/hg09_-89caY" target="_blank">viewed over 13,000 times on YouTube</a>. 
        figure
          <div style="padding:57% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658671091?h=57a6316595&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Beyond Rock Bottom"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption Our 2nd video, entitled Beyond Rock Bottom: Medication Assisted Treatment. Also <a href="https://youtu.be/MxO164ADK7Y" target="_blank">available on YouTube</a>.
        figure
          <div style="padding:57% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658673703?h=7207ccd9a5&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Gas and Brakes of Addiction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption I travelled with Plan Your Recovery's founder to Missouri and Kansas to shoot several hours of documentary footage with people who have successfully used medication-assisted treatment to liberate themselves from addiction. 
</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'pyr')
  }
}
</script>
