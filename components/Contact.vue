<template lang="pug">
  .about
    section
      h3.section-title Get in touch
      ul.list-work 
        li
          span Email
          a( href="mailto:nick@nickniles.com") nick@nickniles.com
        li
          span Phone
          a( href="tel:00410763273136") +41 (0)76 327 31 36
      //- form(netlify action="/" method="POST" name="Contact")
        input(type="hidden" name="form-name" value="Contact")
        p 
          label
            span Name
            br
            input(type="text" name="name" placeholder="Full name")
        p 
          label
            span E-Mail
            br
            input(type="email" name="email" placeholder="mickey@disney.com")
        p 
          label
            span Subject
            br
            input(type="text" name="subject" placeholder="what's this about?")
        textarea(name="body" rows="10")
        button(type="submit") Send
</template>

<style>
.about h2 {
  @apply text-2xl md:text-3xl lg:text-4xl font-light text-center w-full md:w-3/4 lg:w-2/3 mx-auto;
}
</style>