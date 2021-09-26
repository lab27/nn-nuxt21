<template lang="pug">
  .container.typeset
    section.intro
      //- .note Animate this:
      h1(class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center mb-12 tracking-tight") Hi, I'm Nick Niles, 
        br 
        | an American 
        mark digital product 
        | &amp; 
        mark motion graphics 
        | designer based in Switzerland.
      .icon-wrapper
        img(src="/img/icons/arrow.svg")
    section
      figure.portrait.mb-12
        img(src="/img/nick-niles_profile.jpg")
        //- figcaption Hosting the Front Conference Zürich 2019. 
          br
          |Photo by 
          a(href="https://florianziegler.com/" target="_blank") Florian Ziegler.
      h2(class="mx-0 md:mx-12 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-light") I guide you on the journey from a 
        mark business need 
        |to a fully-realized 
        mark digital solution
        |.
      .icon-wrapper
        img(src="/img/icons/arrow.svg")
    section.mb-24
      h3.section-title Areas of Expertise
      ul.list-expertise
        li Website &amp; Digital Product Design
        li Cutting-Edge Front-End Development
        li High-Fidelity Prototyping
        li UX Research & Design
        li Product Management
        li Branding & Identity Design
        li Video Production & Motion Graphics Design
        li Music Composition & Production
        li Teaching (University Level)
        li Public Speaking & Event Hosting
      .icon-wrapper
        img(src="/img/icons/arrow.svg")
    Projects
    .icon-wrapper
      img(src="/img/icons/arrow.svg")
    AboutMe
    
    WorkExperience
    img(src="/img/bison.svg" class="w-1/2 lg:w-1/4 mx-auto")

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
  max-width: 1600px;
  margin: 0 auto;
}

section {
  margin-bottom: 2rem;
  /* min-height: 90vh; */
  padding: 2rem;
}
.section-title {
  @apply text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center font-light mb-12;
}
mark {
  /* background: linear-gradient(yellow, red); */
  /* @apply bg-gradient-to-tr from-green-400 to-blue-500; */
  /* background: linear-gradient(to top right, rgba(255, 140, 0, 0.2), rgba(255, 225, 0, 0.2)); */
  background: rgba(255, 251, 144, .8);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 6rem;
}

ul {
  @apply text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed w-full md:w-2/3 object-center mx-auto;
}

ul li {
  @apply leading-relaxed;
}

ul.list-work  {
  @apply w-full;
}

ul.list-work li {
  @apply border-b border-gray-900;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-left: 0;
  padding: 1rem 0;
}

ul.list-work li:before {
  display: none;
}

ul.list-work li span.company {
@apply font-semibold;
}

ul.list-work li .work-info {
  width: 50%;
  display: flex;
  flex-flow: column wrap;
}
ul.list-work li .work-info p {
  @apply leading-tight;
}

ul.list-work li .work-info:last-child {
  align-content: flex-end;
  align-items: flex-end;
}

p.company {
  @apply font-semibold;
}

p.role {
  text-align: right;
}

p.years,
p.location {
  @apply text-gray-300;
}
</style>