<template lang="pug">
  .external-link
    img(src="/img/ui/ant-link.svg").icon
    a(:href="link" target="_blank") 
      span {{text}}
</template>

<script>
export default {
  props: [
    'link', 'text'
  ]
}
</script>

<style>
img.icon {
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
  top: .25rem;
}
</style>