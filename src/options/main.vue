<template>
<div>
  <h1>{{ title }}</h1>
</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      title: 'options'
    };
  }
};
</script>

<style lang="scss">
h1 {
  color: red;

  span {
    font-size: 16px;
  }
}
</style>
