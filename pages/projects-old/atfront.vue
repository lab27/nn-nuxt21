<template lang="pug">
  .container-project
    .container
      img(src="/img/atfront/atfront-logo.svg").logo
      h1 Atfront
      .role
       h4 Shortly before leaving the web design agency where I worked for almost four years, I was given the dream assignment of rebranding the agency and redesigning the corporate web site. I managed the project, and delivered corporate identity assets and a browser-based prototype as documentation for the development and maintenance of the site. 
       ProjectInfo(agency="Atfront" client="Atfront" year="2015")
    .screenshots 
      figure
        img(src="/img/atfront/atfront-projects.jpg")
        figcaption Landing Page
      figure
        img(src="/img/atfront/atfront-contact.jpg")
        figcaption Contact Page
      figure
        img(src="/img/atfront/atfront-screenshot.jpg")
        figcaption About Page
      figure
        img(src="/img/atfront/atfront-process.jpg")
        figcaption Process Explanation
      figure
        img(src="/img/atfront/atfront-eye.png")
        figcaption Illustration Sample
    .typeset.container
      h3 Responsibilities
      ul 
        li Branding & Corporate Design
        li Web Design
        li Illustration 
        li Project Management
        li Front-End Development
        ExternalLink(link="https://lab27.github.io/atfront-redesign" text="My HTML/CSS Prototype of the redesign")
     

</template>

<script>
export default {
  layout: 'project'
}
</script>