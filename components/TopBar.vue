<template lang="pug">
    .topbar
      nav
        nuxt-link(to="/").font-semibold Nick Niles
        .rightnav
          nuxt-link(to="/projects") Projects
          nuxt-link(to="/about") About Me
          nuxt-link(to="/contact") Contact
      .thin-line
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

.topbar .thin-line {
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