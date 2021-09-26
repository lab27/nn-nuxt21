<template lang="pug">
  .about
    section
      //- h3.section-title Nick Niles
      h3.section-title I have a passion for weaving compelling stories and elegantly simple digital experiences out of complex systems. 
      h3.section-title I especially love creating hi-fidelity, realistic 
        mark prototypes 
        | for user testing and to communicate designs to the development team. 
      figure.portrait.mb-12
        img(src="/img/nick_niles_frontconf.jpg")
        figcaption Hosting Front Conference Zurich, 2019
    Arrow
    section.mb-24
      h3.section-title Education
      ul.list-work
        WorkItem(company="Columbia University" location="New York City" role="MFA Film Directing" years="2009")
        WorkItem(company="Parsons School of Design" location="New York City" role="Fellow, MFA Design & Technology" years="1997 (DNG)")
        WorkItem(company="Boston College" location="Chestnut Hill, MA" role="BA English, BA Studio Art" years="1997")
    Arrow
    section.mb-24
      h3.section-title Speaking
      ul.list-work
        WorkItem(company="Front Conference Zurich" location="Zürich" role="Host" years="2019/2021")
        WorkItem(company="WebZüri" location="Zürich" role="Speaker" years="2017")
        WorkItem(company="Dev Days" location="Zürich" role="Speaker" years="2017")
        WorkItem(company="Front Conference Zurich" location="Zürich" role="Speaker" years="2015")
    Arrow
    WorkExperience
</template>

<style>
.about h2 {
  @apply text-2xl md:text-3xl lg:text-4xl font-light text-center w-full md:w-3/4 lg:w-2/3 mx-auto;
}
</style>