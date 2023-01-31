<template lang="pug">
  .container.container-project
    h1 Craft Music
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p Craft Music is a family-owned and operated Los Angeles-based music instrument school. The asked me for advice about expanding their remote-learning offerings, so I put together a quick prototype demonstrating how their website could be enhanced to encourage visitors to sign up for lessons on the spot. 
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li UX/UI Design
          li Design System Development &amp; Maintenance
          li UI Prototyping in XD, Figma and Front-End Code
          li Front-End Development with Nuxt.js &amp; Tailwinds
          li Stripe and Calendly integration
          li Business Analysis
          li Project Management
          li User Testing
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
          figcaption UI design.
        figure
          img(src="/img/axpo/pricer.jpg")
          figcaption In this screen from a comprehensive prototype of an energy pricing tool I designed, the user uploads historical consumption data to a pricing "object." The tool queries an up-to-date pricing curve every 15minutes, refreshing the price.  
        figure
          img(src="/img/axpo/binding-price.jpg")
          figcaption When the user requests a firm price offer, the pricing card enters "offer" mode and takes on a new visual appearance. I led the discovery phase of the project, interviewed all stakeholders and designed the prototype based on several rounds of tests with real customers. 
        figure 
          img(src="/img/axpo/landing.jpg")
          figcaption Amidst the data-intensive UI designs, it is refreshing to occasionally design a visually engaging langing page.
        figure
          img(src="/img/axpo/videostill.jpg")
          figcaption In addition to UX & UI design and prototyping, I am often called upon to create marketing and informational videos, for example "how-to" videos and feature-release announcements.
        figure
          img(src="/img/axpo/cardspecs.png")
          figcaption A big part of the job is clear and careful documentation of the UI designs for the developers.
</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'craft')
  }
}
</script>
