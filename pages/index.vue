<template lang="pug">
  .container.typeset
    section.intro
      h1 I’m Nick Niles,
        br 
        | an American web designer &amp; developer based in Switzerland. 
      h2 Serving a wide variety of clients since 1998, I'm passionate about guiding organizations and individuals on every facet of the journey from initial idea to a fully realized digital solution. 
    section
      h3 Areas of Expertise
      ul 
        li Website &amp; Digital Product Design
        li Cutting-Edge Front-End Development
        li High-Fidelity Prototyping
        li UX Research & Design
        li Product Management
        li Branding & Identity Design
        li Video Production & Motion Graphics Design
        li Music Composition & Production
        li Teaching (University level)
        li Public Speaking & Event Hosting
      Projects
      //- ul
      //-   li Google
      //-   li Axpo
      //-   li North Face
      //-   li Borneo Orangutan Survival Switzerland 
      //-   li Zurich Insurance
      //-   li Plan Your Recovery
      //-   li Samsung
      //-   li Swiss Airlines
      //-   li Zürich University of the Arts (ZHdK)
      //-   li Kanton Zürich
      //-   li Hilton Hotels
      //-   li Coca-Cola
      br
      br
      figure.portrait 
        img(src="/img/nick_niles-front-intro.jpg")
        figcaption Hosting the Front Conference Zürich 2019. 
          br
          |Photo by 
          a(href="https://florianziegler.com/" target="_blank") Florian Ziegler.
      br
      br
      h3 Education
      p I earned a Masters in Film Directing from 
        strong Columbia University
        |, studied interaction design in the Design &amp; Technology MFA program at 
        strong Parson School of Design 
        |and received bachelor degrees in English and Art from 
        strong Boston College
        |. 
      p I enjoy creating rich experiences through motion graphics, animations, and interaction design. I’m especially interested in the power of high-fidelity interactive prototypes to help teams save time and money.
      br 
      img(src="/img/bison.svg")

</template>

<script>
import Projects from '~/components/projects'
export default {
  components: {
    Projects
  }
}
</script>


<style>
.container {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

section {
  margin-bottom: 2rem;
}

.intro h2 {
  font-weight: normal;
}


</style>