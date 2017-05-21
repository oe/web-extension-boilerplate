<template>
<div class="popup">
  <h1>{{ title }}</h1>
</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      title: 'abc'
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
