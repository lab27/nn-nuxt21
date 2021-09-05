<template lang="pug">
  .container-project
    .container
      img(src="/img/vr/vr-logo.svg").logo
      h1 Voice Republic
      .role
       h4 Voice Republic was a platform for high-quality spoken content, with headquarters in Zürich and Berlin. It offered conferences, lecture series, book fairs and individual podcasters an easy way to live-stream their content. Notable appearances included Edward Snowden, Slawoj Zizek and Angela Merkel. As Head of Product Design on a small team, I redesigned the product and implemented much of the front-end code myself.
       ProjectInfo(client="Voice Republic Media" year="2015-2017")
    .screenshots 
      img(src="/img/vr/vr-home.jpg")
      img(src="/img/vr/vr-profile.jpg")
      img(src="/img/vr/vr-talk-page.jpg")
      img(src="/img/vr/vr-stages.png")
      img(src="/img/vr/vr-stage-controller.jpg")
      //- img(src="/img/pyr/division.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li 
          strong Strategy: 
          | Consulted the key stakeholders on design and UX enhancements. I worked closely with the developers to ensure that design suggestions were realistic to build within the given resources.
        li 
          strong Workshops: 
          | Led design workshops to gather requirements and brainstorm solutions.
        li 
          strong UX: 
          | Created wireframes and mockups for new features and apps (Sketch, Illustrator).
        li 
          strong Design & Prototyping: 
          | Deliver browser-based prototypes of each new feature for validation, testing and documentation.
        li 
          strong Front-End Development: 
          | Implement designs using HAML, JQuery, Rails, SCSS and React with Clojurescript.
     

</template>

<script>
export default {
  layout: 'project'
}
</script>