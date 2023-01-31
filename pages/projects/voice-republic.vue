<template lang="pug">
  .container.container-project
    h1 Voice Republic
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p Voice Republic was a platform for high-quality spoken content, with headquarters in Zürich and Berlin. It offered conferences, lecture series, book fairs and individual podcasters an easy way to live-stream and archive their content. Notable appearances included Edward Snowden, Slawoj Zizek and Angela Merkel.
        br
        p Before I joined Voice Republic in the Spring of 2015 as Head of Product Design, the UX had been patched together by a series of freelance designers. It lacked cohesion and features were competing with each other for attention.
        br
        p At the same time, the team was pivoting away from a collaborative stage model&mdash;where listeners could request the microphone&mdash;to more of a traditional live broadcast model. They asked me to join the in-house team in order to give the design a refresh and ensure that all the new features would cohere to the new design.
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li UX/UI Design
          li Design System Development &amp; Maintenance
          li UI Prototyping in Sketch and Front-End Code
          li Front-End Development (Ruby on Rails, React with Clojurescript)
          li Business Analysis
          li Design Workshops
        //- ExternalLink(link="https://axpo.com" text="Axpo")
    .examples
      h3 Examples
      .screenshots
        figure
          img(src="/img/vr/vr-laptop.png").no-shadow
          figcaption During the early part of my tenure at Voice Republic, I developed many iterations of designs and prototypes for the centerpiece of the platform: the talk browser.
        figure 
          img(src="/img/vr/talk-before.jpg")
          figcaption Talk page, <strong>before redesign</strong>.
            br 
            p This is the way the talk page looked when I joined the product. The design presented many areas for improvement. For example:
            ul.list-disc.list-inside
              li The stock photo in the background felt generic, impersonal and was the same on every page.
              li The UI was cluttered, without a clear hierarchy.
              li The use of color was confusing and out of alignment with the brand guidelines.
        figure
          img(src="/img/vr/talk-after.jpg")
          figcaption Talk page, <strong>after redesign</strong>. This is how the page looked after my redesign. 
            ul.list-disc.list-inside
              li Reduce colors to create more meaning, and limit the palette to brand colors.
              li Integrate uploaded imagery to give each talk a unique identity.
              li Keep the user engaged by offering recommended further content on the right.

        figure
          img(src="/img/vr/vr-talk-phone.jpg")
          figcaption Responsive talk page design with sticky audio player controls on the bottom of the window.
        figure
          <div style="padding:70% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658612399?h=8ba59fbc6f&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Voice Republic Stage Controller Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption This screencast shows a high-fidelity protoype I created during the design and development of a stage controller tool for audio technicians to use during an event such as a conference. 
        figure 
          img(src="/img/vr/talk-cards.jpg")
          figcaption Here is a comparison of how the original talk card design stacks up against one of my early redesign efforts. I attempted to create a cleaner look and a clearer visual hierarchy, prioritizing the title, and emphasizing length and play count. 


</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'voice-republic')
  }
}
</script>