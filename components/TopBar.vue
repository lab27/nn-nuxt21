<template lang="pug">
    .topbar
      nav
        nuxt-link(to="/").name Nick Niles
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
}

.topbar nav {
  display: flex;
  justify-content: space-between;
}

.topbar nav .rightnav a {
  margin-left: 1rem;
  cursor: pointer;
}

.topbar .thin-line {
  margin-top: .75rem;
  height: 1px;
  width: 100%;
  background-color: var(--c-dark);
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