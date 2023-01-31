<template lang="pug">
  .container.container-project
    h1 Atfront 
      span.thin Rebrand &amp; Redesign
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p Atfont is a digital agency based in Zürich, Switzerland, where I worked for 4.5 years as Senior Interactive Designer. As my final project before leaving the agency to join a startup, the owners gave me the task to rebrand the agency and redesign the website. This was a dream project. The scape was small enough that I could own the whole process, from project management to information architecture to branding and web design through to front-end development of a high-end prototype which was used as documentation for the implementation of the production site. 
        //- p There was a strong level of trust between the client and myself, and an urgent timeline that encouraged productive energy without a sense of being rushed. 
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li Branding &amp; Corporate Identity Design
          li Information Architecture
          li Web Design
          li High Fidelity Prototyping
          li Illustration
          li Photography
          li Animation &amp; Video Production
          li Project Management
          li User Testing
        //- ExternalLink(link="https://axpo.com" text="Axpo")
    .examples
      h3 Examples
      .screenshots
        figure 
          img(src="/img/atfront/atfront-screens.png")
          figcaption During the design process, I wanted the stakeholders to be able to view my work in its native format&mdash;web pages&mdash;on whatever device they had on hand. So I used a static site generator to build a prototype that looked and functioned exactly as the finished site should. Most of the actual design work for the web site was done in code. The prototype later served as the reference for the development team when they build the production code.
        figure 
          img(src="/img/atfront/illustrations.png")
          figcaption I knew that lots of the site’s content would consist of technical explanations of the agency’s process. It was important to me to offset the text (which I knew many visitors wouldn’t read) with an element of human warmth, and help visitors gain quicker access to the concepts, through illustrations.
        figure 
          img(src="/img/atfront/logo-explore.png")
          figcaption These are some of my early logo explorations. I had been cooking up logo designs for awhile leading up the actual redesign kickoff. The agency's original logo seemed sorely outdated and failed to convey the newfound level of expertise, competence and status that the agency had acquired in their 14 years of work. For one, since several of the agency's key projects centered around avalance saftey&mdash;in other words, dealing with mountains&mdash;it seemed to me a missed opportunity to use a lowercase "a" instead of a captial "A" with its strong triangularity (i.e. resembling a mountain). Secondly, I felt it was time to phase out the pixel-font slogan that had been attached to the logotype.
        figure
          img(src="/img/atfront/logo-compare.png")
          figcaption We ended up with something I believe conveys authority, modernity and velocity. The two red stripes serve as "speed lines" as well as suggesting the two forward slashes in a web URL.
        //- figure
        //-   img(src="/img/atfront/atfront-door.jpg")
        //-   figcaption The new logo in action outside the main office door. 
        figure
          img(src="/img/atfront/atfront-colors.png")
          figcaption The basic color palette that I created allows for both the industrial boldness of the dark blues as well as the human warmth of the orange, red and green.
        figure
          img(src="/img/atfront/wireframes.jpg")
          figcaption The next step was to structure the site. Based on initial feedback on what the owners wanted the site to convey, I used wireframes to map out the site and tape it to the wall. This map became an invaluable reference point for the rest of the design process.
        figure
          <div style="padding:75% 0 0 0;position:relative;" class="js-video widescreen"><iframe src="https://player.vimeo.com/video/658515309?h=72463ff61c&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" playsinline frameborder="0" muted="muted" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Pricer Demo"></iframe></div>
          figcaption To take advantage of the warm natural light of spring, as well as the agency’s new terrace, I shot the team portraits in natural light using my Canon 5D and the reverse side of a whiteboard as a reflector. In Adobe Lightroom I added some contrast and warmth to give the photos a bit more of a "magazine" look.
        figure
          <div style="padding:57% 0 0 0;position:relative;" class="js-video widescreen"><iframe src="https://player.vimeo.com/video/136279747?h=72463ff61c&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" muted="muted" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PricerDemo.mov"></iframe></div>
          figcaption Using Premiere and After Effects, I created a short teaser of some of Atfront’s recent projects to display on the front page of the site.
      

</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'atfront')
  }
}
</script>