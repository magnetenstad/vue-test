<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
let imgSrc = ref('');
onMounted(() => {
  getCat();
});

const getCat = async () => {
  axios.get('https://api.thecatapi.com/v1/images/search').then((result) => {
    imgSrc.value = result.data[0].url;
  });
};
</script>

<template>
  <h1>Random cats!</h1>
  <img :src="imgSrc" alt="A pet!" />
  <p id="url">{{ imgSrc }}</p>
  <br />
  <br />
  <button id="refresh" @click="getCat">Refresh</button>
</template>
