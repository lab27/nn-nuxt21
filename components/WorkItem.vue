<template lang="pug">
  li 
    .work-info
      p.company {{company}}
      p.location {{location}}
    .work-info
      p.role {{role}}
      p.years {{years}}
</template>

<script>
export default {
  props: [
    'company','role','location', 'years'
  ]
}
</script>