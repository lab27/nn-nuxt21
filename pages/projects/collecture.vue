<template lang="pug">
  .container-project
    .container
      img(src="/img/collecture/collecture-logo.svg").logo
      h1 Collecture
      .role
       h4 Collecture was a mobile lecture-capture solution developed by 200OK, the Swiss-based startup incubator and product foundry. I was asked to create their corporate identity and develop a new UX/UI for the app and platform.
       ProjectInfo(agency="200OK" client="Collecture" year="2017-2018")
    .screenshots 
      img(src="/img/collecture/collecture-phone.jpg")
      img(src="/img/collecture/collecture-logos.jpg")
      img(src="/img/collecture/collecture-landing.jpg")
      img(src="/img/collecture/collecture-prototype.jpg")
      img(src="/img/collecture/collecture-teaser.jpg")
      img(src="/img/collecture/collecture-mailer.jpg")
      //- img(src="/img/collecture/collecture-sketches.png")
      //- img(src="/img/pyr/division.jpg")
    .typeset.container
      h3 Responsibilities
      ul 
        li Branding & Corporate Design
        li Web & Mobile App Design 
        li Hi-Fidelity Prototyping 
        li Front End Development (GSAP)

</template>

<script>
export default {
  layout: 'project'
}
</script>