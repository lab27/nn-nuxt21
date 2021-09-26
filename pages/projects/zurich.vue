<template lang="pug">
  .container-project
    .container
      img(src="/img/zurich/zurich-logo.svg").logo
      h1 Zurich Insurance
      .role
       h4 I was part of a cutting-edge web development team dedicated to refactoring, theming and building new features for the regional Zurich and Vita web sites. Responsibilities included: modern reactive web development and high-fidelity prototyping using React, Vue, SASS and Storybook among other tools.
       ProjectInfo(agency="Viu" client="Zurich Insurance" year="2018-2019")
    .screenshots 
      img(src="/img/zurich/ausweis1.jpg").tall
      img(src="/img/zurich/ausweis2.jpg").tall
      img(src="/img/zurich/ausweis3.jpg").tall
    .container
      h3 Responsibilities
      ul 
        li Front End Development (React, Vue, Azure DevOps, Storybook, Scrum) 
        li Design System Development
        li UX/UI Design
        ExternalLink(link="https://zurich.ch" text="Zurich Insurance Switzerland")

</template>

<script>
export default {
  layout: 'project'
}
</script>