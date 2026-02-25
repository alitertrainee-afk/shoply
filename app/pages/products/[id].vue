<template>
  <div>
    <h2>Product Details</h2>
    <p>Viewing information for product ID: {{ route.params.id }}</p>
    <NuxtLink to="/products">Back to products</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
