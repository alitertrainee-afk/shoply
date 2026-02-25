<template>
  <div class="products-wrapper">
    <h2>Our Products</h2>

    <div v-if="pending">Loading products...</div>

    <div v-else-if="error" class="error">
      Error loading products: {{ error.message }}
    </div>

    <ul v-else class="products-grid">
      <li v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image" />

        <h3 class="product-title">
          {{ product.title }}
        </h3>

        <p class="product-price">${{ product.price }}</p>

        <NuxtLink :to="`/products/${product.id}`" class="product-link">
          View Details
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: products, pending, error } = await useFetch("/api/products");
</script>

<style scoped>
.products-wrapper {
  padding: 1rem;
}

.error {
  color: red;
}

/* Responsive Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Card */
.product-card {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  background: #fff;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 0.75rem;
}

.product-title {
  font-size: 0.95rem;
  min-height: 48px;
}

.product-price {
  font-weight: 600;
  margin: 0.5rem 0;
}

.product-link {
  display: inline-block;
  margin-top: 0.5rem;
  text-decoration: none;
  color: #2563eb;
  font-weight: 500;
}
</style>
