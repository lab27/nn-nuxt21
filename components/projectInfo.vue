<template lang="pug">
.project-info
  p(v-if="agency")
    span.key Agency:
    span.value {{agency}} &nbsp;
  p(v-if="client")
    span.key Client:
    span.value {{client}} &nbsp;
  p(v-if="year")
    span.key Year:
    span.value {{year}}
  
</template>

<script>
export default {
  props: [
    'agency', 'client', 'year'
  ]
}
</script>

<style>
.project-info {
  @apply text-center;
  font-size: .875rem;
}

.project-info p {
  margin: 0;
  line-height: 1;
  display: inline-block;
  /* margin-right: 1rem; */
}

.project-info .key {
  font-weight: 700;
  margin-right: .25rem;
}
</style>