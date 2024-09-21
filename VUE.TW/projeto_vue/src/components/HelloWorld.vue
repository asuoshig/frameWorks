<template>
  <div class="text-4xl text-blue-600 text-center p-30 m-30">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello World!'
    }
  }
}
</script>

<style scoped>
.hello {
  color: blue;
}
</style>
