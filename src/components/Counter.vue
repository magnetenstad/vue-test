<script setup lang="ts">
import { ref } from 'vue';

let count = ref(0);
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count++" id="increment">Increment</button>
  <button @click="count--" id="decrement">Decrement</button>
</template>
