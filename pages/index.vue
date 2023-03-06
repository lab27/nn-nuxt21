<template lang="pug">
  .container.typeset
    section.intro
      //- .note Animate this:
      h1(class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center tracking-tight").fadeMe Hi, I'm Nick Niles.
      //- Arrow
    section
      //- FancyPortrait
      figure.portrait.mb-12.fadeMe(style="--elementDelay: 0.2s;")
        img(src="/img/nick_niles_hosting.jpg")
        figcaption Hosting the Front Conference Zürich 2021. 
          br
          |Photo by 
          a(href="https://florianziegler.com/" target="_blank") Florian Ziegler.
      h2.lead I'm a digital designer who loves to bring delight to products and the teams that build them.
    Arrow
    section
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
    Arrow
    AboutMe
    Contact(class="mb-12")

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
:root {
  --elementDelay: 0.1s;
}


.fadeMe {
  opacity: 0;
  animation: fadeIn 2s cubic-bezier(0,.66,.07,1) var(--elementDelay) forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
  

h2.lead {
@apply mx-0 md:mx-12 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-light;
line-height: 1.2;
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

section {
  margin-bottom: 2rem;
  /* min-height: 90vh; */
  @apply p-4 md:p-8;
}

.section-title {
  @apply text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight lg:leading-tight text-center font-light mb-24;
}


mark {
  /* background: linear-gradient(yellow, red); */
  /* @apply bg-gradient-to-tr from-green-400 to-blue-500; */
  /* background: linear-gradient(to top right, rgba(255, 140, 0, 0.2), rgba(255, 225, 0, 0.2)); */
  background: none;
  background: linear-gradient(to top right, rgba(144, 238, 144, .3), rgba(255, 255, 0, .2));
  /* box-shadow: inset 0 -0.75em 0 -0.25em rgba(30, 144, 255, .3); */
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  /* padding-top: 6rem; */
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

ul.list-work a {
  text-decoration: none;
}

ul.list-work a:hover p.company {
  color: dodgerblue;
  box-shadow: inset 0 -1px dodgerblue;
}

p.company {
  @apply font-semibold;
  display: inline-block;
  width: fit-content;
  box-shadow: none;
  transition: box-shadow .2s ease-in-out;
}

p.role {
  text-align: right;
}

p.years,
p.location {
  @apply text-gray-300;
}
</style>