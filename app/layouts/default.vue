<template>
  <div>
    <header
      style="
        border-bottom: 1px solid #ccc;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
      "
    >
      <nav>
        <NuxtLink to="/" style="margin-right: 1rem">Home</NuxtLink>
        <NuxtLink to="/products" style="margin-right: 1rem">Products</NuxtLink>
      </nav>

      <div>
        <strong>Cart: {{ cartStore.totalItems }} items</strong>
        <button @click="cartStore.clearCart" style="margin-left: 1rem">
          Clear Cart
        </button>
      </div>
    </header>

    <main style="padding: 2rem">
      <slot />
    </main>

    <footer style="margin-top: 2rem; border-top: 1px solid #ccc; padding: 1rem">
      <p>&copy; 2026 Shoply</p>
    </footer>
  </div>
</template>

<script setup>
import { useCartStore } from "../../../stores/cart";

const cartStore = useCartStore();
</script>
