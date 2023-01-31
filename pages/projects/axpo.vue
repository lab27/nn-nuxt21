<template lang="pug">
  .container.container-project
    .project-header
      .project-header__title
        h1 Axpo
        h2 UX/UI Design
      .project-header__image
        img(src="/img/axpo/axpo-header.jpg")
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p Axpo is Switzerland's largest energy company. For the past 2.5 years, I’ve worked at the intersection of business and product to expand their customer portal, bringing digital tools from idea stage through to prototyping, implementation and refinement.
        br 
        p In addition to designing and prototyping new features for the core portal services, as well as enhancing and maintaining the design system, I've worked in the innovation space&mdash;helping to discover new tools for internal and external use, conducting research, analysis and workshops to uncover solutions to complex business problems. 
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li UX/UI Design
          li Design System Development &amp; Maintenance
          li UI Prototyping in XD, Figma and Front-End Code
          li Creation of Marketing Videos (including animation, voice-over narration and music)
          li CSS Support for Developers
          li Business Analysis
          li Customer Research
          li Project Management
          li User Testing
          li Design Workshops
        //- ExternalLink(link="https://axpo.com" text="Axpo")
    .examples
      h3 Examples
      .screenshots
        figure 
          img(src="/img/axpo/energydata.png")
          figcaption In this screen from the Energy Data module of the customer portal, you can see my intention to break out of the conventional "boxy" look of most business dashboard applications. This design aligns with Axpo's corporate identity, which leans heavily on mid-centry Swiss principles of grid, spacing and typographical constrast. With this approach, we remind our customers that they're using a tool which is tailor-made for them, not just a pre-packaged solution.
        figure
          img(src="/img/axpo/portfolio.png")
          figcaption One of the challenges of this project has been to summarize large collections of data in visual way that give the user access to the most relevant information while keeping them from feeling overwhelmed. In this design, for example, the user sees more detailed hedging data when hovering the card.
        figure
          img(src="/img/axpo/positions.png")
          figcaption The UI is designed in a way to provide high flexibility for the user to choose how to view their relevant data, while using smart defaults and keeping choices from cluttering the view.
        figure
          img(src="/img/axpo/trader2.jpg")
          figcaption This is a screenshot from a high-fidelity prototype I created directly in Vue.js in the space of a few days during a design sprint workshop. It represents an early iteration on a tool designed for spot traders to use as a quick reference, highlighting a market snapshot with relevant and actionable insights into their position at the moment. Using the "Dark Cockpit" philosophy taken from air travel&mdash;that elements on the display should only light up when they need urgent attention&mdash;I chose to use a dark background and muted palette. The red fields are flashing momentarily to indicate a change in market activity.
        figure
          <div style="padding:75% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658342517?h=72463ff61c&amp;badge=0&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PricerDemo.mov"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption In this screencast from a comprehensive Figma prototype of an energy pricing tool I designed, the user uploads historical consumption data to a pricing "object." The tool queries an up-to-date pricing curve every 15 minutes, refreshing the price.  
        figure 
          img(src="/img/axpo/landing.jpg")
          figcaption Amidst the data-intensive UI designs, occasionally the job calls for a more visually engaging langing page.
        figure
          img(src="/img/axpo/videostill.jpg")
          figcaption In addition to UX & UI design and prototyping, I am often called upon to create marketing and informational videos, for example "how-to" videos and feature-release announcements.
        figure
          img(src="/img/axpo/teams.jpg")
          figcaption In the course of the Customer Portal design process, we've conducted many remote user testing sessions. 
        figure
          img(src="/img/axpo/cardspecs.png")
          figcaption A big part of the job is clear and careful documentation of the UI designs for the developers. Here is only one example of the kinds of detailed specs I have prepared for many such features. 

</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'axpo')
  }
}
</script>