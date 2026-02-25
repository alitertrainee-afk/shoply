<template>
  <div>
    <h2>Product Details</h2>
    <p>Viewing information for product ID: {{ route.params.id }}</p>

    <div style="margin: 2rem 0; padding: 1rem; border: 1px dashed #ccc">
      <h3>Select Quantity</h3>

      <button @click="decrement">-</button>
      <span style="margin: 0 1rem; font-weight: bold">{{ quantity }}</span>
      <button @click="increment">+</button>

      <p v-if="quantity === 5" style="color: red; margin-top: 0.5rem">
        Max limit reached!
      </p>

      <p style="margin-top: 1rem">
        Total estimated price: <strong>${{ estimatedTotal }}</strong>
      </p>

      <button
        @click="addToCart"
        style="
          margin-top: 1rem;
          background: black;
          color: white;
          padding: 0.5rem 1rem;
        "
      >
        Add to Cart
      </button>
    </div>

    <NuxtLink to="/products">Back to products</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// Reactive primitive
const quantity = ref(1);

// Static value
const basePrice = 29.99;

// Mutations
const increment = () => {
  if (quantity.value < 5) {
    quantity.value++;
  }
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Derived state
const estimatedTotal = computed(() => {
  return (quantity.value * basePrice).toFixed(2);
});

const addToCart = () => {
  alert(`Added ${quantity.value} items to cart!`);
};
</script>
