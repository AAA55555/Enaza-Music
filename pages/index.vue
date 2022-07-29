<template>
  <div></div>
</template>

<script>
export default {
  name: 'AppIndex',
  head () {
    return {
      title: 'Enaza Music'
    }
  },
  created() {
    this.$router.push('/catalog')
  },
};
</script>
