<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>You're all set. Start building your app in <code>src/App.vue</code>.</p>
  </div>
</template>

<style scoped>
.hello {
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

code {
  background: #f4f4f5;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>
