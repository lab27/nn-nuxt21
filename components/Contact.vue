<template lang="pug">
  .contact
    section
      h3.section-title Get in touch
      ul.list-work.list-contact
        li
          span Email
          a( href="mailto:nick@nickniles.com") nick@nickniles.com
        li
          span Phone
          a( href="tel:0018054503774") +1 (805) 450-3774
        li
          span LinkedIn
          a(href="https://www.linkedin.com/in/nickniles/" target="_blank") /in/nickniles
      //- form(netlify action="/" method="POST" name="Contact")
        ul.list-contact
          li
            
            input(type="hidden" name="form-name" value="Contact")
          li 
            span Name
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

.list-contact a:hover {
  @apply text-blue-500 underline;
}
</style>