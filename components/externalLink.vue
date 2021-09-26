<template lang="pug">
  li.external-link
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
  width: 2rem;
  height: 2rem;
  margin-right: .5rem;
  top: .275em;
  float: left;
}

li.external-link {
  display: flex;
  margin-top: 2rem;
  text-decoration: underline;
}

li.external-link::before {
  display: none;
}
</style>