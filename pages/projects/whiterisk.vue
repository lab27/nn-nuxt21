<template lang="pug">
  .container.container-project
    h1 White Risk
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p White Risk is a comprehensive online educational portal and toolset dedicated to avalanche safety and prevention. Adapting the definitive book by experts from the Institute for Snow and Avalanche Research, my team and I spent two years developing original architecture and visuals for the project, winning a Horizon Interactive Gold Award in the process. 
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li UX/UI Design
          li Design System Development
          li 3D Modeling &amp; Animation
          li Data Visualization
          li CSS Support for Developers
        //- ExternalLink(link="https://axpo.com" text="Axpo")
    .examples
      h3 Examples
      .screenshots
        figure
          img(src="/img/whiterisk/landing.jpg")
          figcaption I was responsible for the entire look and feel of the portal, including color palettes, layout and design, UI design, 3D modeling and animations, and data visualizations. 
        figure
          .js-video( style="padding:77% 0 0 0;position:relative;" )
            <iframe src="https://player.vimeo.com/video/658327901?h=a1062f83a6?&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0" class="col-span-3" width="1498" height="1152" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          //- img(src="/img/whiterisk/basics.jpg")
          figcaption The information on the portal is broken down into 5 chapters. Each chapter is represented by a rotating 3D mountain with floating labels which correspond to the informational sections within the chapter. 
        figure 
          .js-video( style="padding:67% 0 0 0;position:relative;" )
            <iframe src="https://player.vimeo.com/video/106149134?&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0" width="1498" height="1152" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          //- img(src="/img/whiterisk/analyser.jpg")
          figcaption In this larger rendering of one of the chapter-navigation mountains, you can see the attention to detail in the snow patterns, the ski tracks, the small buildings and trees, even the translucent cloud. Each feature of the mountain represents a separate section of the chapter.
        figure 
          img(src="/img/whiterisk/analyser.jpg")
          figcaption Among the portal's five chapters of content, I created hundreds of infographics and visual tools such as this one, including icons, charts, graphs, 2D and 3D illustrations.  
        figure
          img(src="/img/whiterisk/snowpack.jpg")
          figcaption Another example of a complex visualization of a snowpack. The use of a subdued blue-gray palette for the UI allows the bright red and yellow colors to stand out as the most important data points. 
        figure
          img(src="/img/whiterisk/avalanche.jpg")
          figcaption Graphics such as these involved complex texturing, surface mapping and lighting techniques in Cinema 4D. 
        figure
          img(src="/img/whiterisk/witness.jpg")
          figcaption Another example of 3D modeling and rendering techniques in Cinema 4D.
</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'whiterisk')
  }
}
</script>