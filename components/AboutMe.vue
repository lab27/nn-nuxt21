<template lang="pug">
  .about
    section
      //- h3.section-title Nick Niles
      h3.section-title I enjoy creating rich experiences through motion graphics, animations, and interaction design. I’m especially interested in the power of high-fidelity interactive prototypes to help teams save time and money.
      figure.portrait.mb-12
        img(src="/img/nick_niles_frontconf.jpg")
        figcaption Hosting Front Conference, Zürich 2019
    section.mb-24
      h3.section-title Education
      ul.list-work
        WorkItem(company="Columbia University" location="New York City" role="MFA Film Directing" years="2009")
        WorkItem(company="Parsons School of Design" location="New York City" role="Fellow, MFA Design & Technology" years="1997 (DNG)")
        WorkItem(company="Boston College" location="Chestnut Hill, MA" role="BA English, BA Studio Art" years="1997")
      .icon-wrapper
        img(src="/img/icons/arrow.svg")
    section.mb-24
      h3.section-title Speaking
      ul.list-work
        WorkItem(company="Front Conference Zurich" location="Zürich" role="Host" years="2019/2021")
        WorkItem(company="WebZüri" location="Zürich" role="Speaker" years="2017")
        WorkItem(company="Dev Days" location="Zürich" role="Speaker" years="2017")
        WorkItem(company="Front Conference Zurich" location="Zürich" role="Speaker" years="2015")
</template>

<style>
.about h2 {
  @apply text-2xl md:text-3xl lg:text-4xl font-light text-center w-full md:w-3/4 lg:w-2/3 mx-auto;
}
</style>