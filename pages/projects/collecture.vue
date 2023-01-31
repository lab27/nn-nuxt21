<template lang="pug">
  .container.container-project
    h1 Collecture 
    //- Be sure to include each project’s scope, your direct contributions, and the design rationale.
    .basic-info
      .role
        h3 Introduction
        p Collecture was a mobile lecture-capture app with headquarters in Zürich. I was asked to create their corporate identity and develop a new UX/UI for the app and cloud-based ecosystem.
        //- ProjectInfo(agency="Randstad" client="Axpo" year="2019-Present")
      .responsibilities
        h3 My roles in the project
        ul 
          li UX/UI Design
          li Branding and Corporate Identity Design
          li UI Prototyping in Sketch and Front-End Code
          li Front-End Development
          li Project Management
        //- ExternalLink(link="https://axpo.com" text="Axpo")
    .examples
      h3 Examples
      .screenshots
        figure 
          img(src="/img/collecture/collecture-mailer.jpg")
          figcaption My intention for the branding and design of Collecture was to evoke calmness and hospitality and to make the app as simple to use as possible.
        figure
          img(src="/img/collecture/collecture-sketches.png")
          figcaption After an initial period of gathering inspiration and sketching wildly, I arrived at a proposed logo mark that suggested the Zen “Enso” which reflected the simplicity of use for which the product strove on the one hand, as well as the fact that the founder of the company is an ordained Zen monk. What we quickly found, though, was that the detail of the brush stroke didn’t translate to smaller use cases—such as mobile app icons. I began an exploration to adapt the physically nuanced Enso to something more iconic.
        figure
          img(src="/img/collecture/collecture-logos.jpg")
          figcaption I reduced the brush stroke to five concentric, open rings which narrow along their length. One ring for each finger on a human hand. This has the combined effect of resembling the “C” in Collecture, as well as suggesting a circular “swiping” gesture that evokes the act of collecting, or, perhaps, of a vinyl record. The primary colors—bright blue and green—are there to evoke positivity, trust, and institutional reliability.
        figure
          img(src="/img/collecture/collecture-landing.jpg")
          figcaption In advance of a big product pitch, I created a simple landing page which told the “story” of Collecture’s features using animated SVG illustrations. In the process, I discovered an exciting area of the SVG specification called the “Foreign Object” tag, which allows you to embed external markup inside an SVG. That allowed me to essentially build a mini web site inside the phone illustration. 


        figure
          <div style="padding:56% 0 0 0;position:relative;" class="js-video"><iframe src="https://player.vimeo.com/video/658634724?h=5f3151a3bd&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" autoplay="autoplay" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Collecture Prototype"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          figcaption I proposed a new UX and UI design based on my own test and feedback we were getting from beta users. One of the main differences is the separation of the UI between a permanent recording action area on top and a file viewer on the bottom. This allows the user—normally a teacher or professor who may have only a few minutes between lectures—to quickly begin a new recording without having to relocate themselves within the app. Here you can see the high-fidelity prototype I built to share and test these new design concepts.
        figure
          img(src="/img/collecture/collecture-cta.jpg")
          figcaption This screen shows an early version of a market landing page targeted at universities. 

</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.dispatch('removeViewedProject', 'collecture')
  }
}
</script>