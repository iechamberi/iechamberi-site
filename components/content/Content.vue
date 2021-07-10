<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="c-content" v-html="$md.render(data)" />
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.c-content::v-deep h1 {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2rem;
}
.c-content::v-deep p {
  font-size: 1.25rem;
  color: #4a5568;
  margin-bottom: 1.25rem;
}
.c-content::v-deep h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.c-content::v-deep h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}
.c-content::v-deep ul {
  margin-left: 1.25rem;
  color: #4a5568;
  margin-bottom: 1.25rem;
}
.c-content::v-deep ul li {
  margin-bottom: 1.25rem;
}
</style>
