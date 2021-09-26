<template lang="pug">
  .container-project
    .container
      img(src="/img/whiterisk/whiterisk-logo.svg").logo
      h1 White Risk
      .role
       h4 White Risk is a comprehensive portal for avalanche prevention, featuring hundreds of pages, tools, graphics and animations to help users learn how avalanches form and how to stay safe in the snow. I created much of the visual content for the portal.
       ProjectInfo(agency="Atfront" client="SWL" year="2011-2012")
    .screenshots 
      img(src="/img/whiterisk/whiterisk-home.jpg")
      img(src="/img/whiterisk/whiterisk-learn.jpg")
      img(src="/img/whiterisk/whiterisk-tool.jpg")
      WRVideo1(class="w-full md:w-2/3")
    .typeset.container
      h3 Responsibilities
      ul 
        li UI Design
        li Data Visualization
        li 3D Design &amp; Animation
        li CSS
        ExternalLink(link="https://whiterisk.ch" text="White Risk Web")
</template>

<script>
export default {
  layout: 'project'
}
</script>