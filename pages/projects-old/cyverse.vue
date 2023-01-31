<template lang="pug">
  .container-project
    .container
      //- img(src="/img/cyverse/cyverse-logo.svg").logo
      h1 Cyverse
      .role
       h4 This boutique cyber-security firm with headquarters in Switzerland and Israel approached me for a rebrand and web redesign. 
       ProjectInfo(agency="Freelance" client="Cyverse" year="2015")
    .screenshots 
      figure
        img(src="/img/cyverse/cyverse-start.jpg")
        figcaption Landing Page
      figure
        img(src="/img/cyverse/cyverse-tools.jpg")
        figcaption Info Page
      figure
        img(src="/img/cyverse/cyverse_logo-white.png")
        figcaption Logo Normal
      figure
        img(src="/img/cyverse/cyverse-logo.png")
        figcaption Logo Dark Mode
    .typeset.container
      h3 Responsibilities
      ul 
        li Branding & Corporate Design
        li Web Design 
        li Hi-Fidelity Prototyping 


</template>

<script>
export default {
  layout: 'project'
}
</script>