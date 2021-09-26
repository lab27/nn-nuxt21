<template lang="pug">
    .topbar
      nav(class="w-full xs:block md:flex")
        nuxt-link(to="/" class="w-full md:w-1/2 mb-2").font-semibold Nick Niles
        .rightnav(class="hidden md:block")
          nuxt-link(to="/projects") Projects
          nuxt-link(to="/about") About Me
          nuxt-link(to="/contact") Contact
      .thin-line
      .mobile-nav(class="flex md:hidden w-full justify-between pb-2 pt-4")
        nuxt-link(to="/projects") Projects
        nuxt-link(to="/about") About Me
        nuxt-link(to="/contact") Contact
      .thin-line(class="block md:hidden w-full")
</template>

<style>
.topbar {
  position: relative;
  display: flex;
  flex-flow: column;
  @apply text-xl;
  padding: 2rem;
}

.topbar nav {
  display: flex;
  justify-content: space-between;
}

.topbar nav .rightnav a {
  margin-left: 2rem;
  cursor: pointer;
  @apply font-light;
}

.topbar .thin-line,
footer .thin-line {
  margin-top: .75rem;
  height: 1px;
  width: 100%;
  @apply bg-gray-900;
  transform: scaleX(.08);
  animation: zipline 1s forwards;
  animation-delay: 1s;
  transform-origin: top left;
}

@keyframes zipline {
  0% {
    transform: scaleX(.08);
  }

  80% {
    transform: scaleX(.08);
  }

  100% {
    transform: scaleX(1);
  }
}
</style>