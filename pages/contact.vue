<template lang="pug">
  .container.container-contact
    h3.section-title Get in touch
    form(netlify action="/" method="POST" name="Contact")
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