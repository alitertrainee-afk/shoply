<template>
  <div class="product-page">
    <NuxtLink to="/products" class="back-link"> ← Back to products </NuxtLink>

    <div v-if="pending" class="state">Loading product details...</div>

    <div v-else-if="error" class="state error">
      Error: Could not load product.
    </div>

    <div v-else-if="product" class="product-container">
      <!-- Image Section -->
      <div class="image-wrapper">
        <img :src="product.image" :alt="product.title" class="product-image" />
      </div>

      <!-- Details Section -->
      <div class="details-wrapper">
        <h2 class="title">{{ product.title }}</h2>

        <p class="description">
          {{ product.description }}
        </p>

        <p class="price">${{ product.price }}</p>

        <!-- Quantity Card -->
        <div class="purchase-box">
          <h3>Select Quantity</h3>

          <div class="quantity-controls">
            <button @click="decrement">−</button>

            <span class="quantity">
              {{ quantity }}
            </span>

            <button @click="increment">+</button>
          </div>

          <p class="total">
            Total:
            <strong>${{ estimatedTotal }}</strong>
          </p>

          <button class="add-btn" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const {
  data: product,
  pending,
  error,
} = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`);

const quantity = ref(1);

const decrement = () => {
  if (quantity.value > 1) quantity.value--;
};

const increment = () => {
  quantity.value++;
};

const estimatedTotal = computed(() => {
  if (!product.value) return 0;
  return (quantity.value * product.value.price).toFixed(2);
});

const addToCart = () => {
  alert(`Added ${quantity.value} of ${product.value.title} to cart!`);
};
</script>

<style scoped>
.product-page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #2563eb;
  font-weight: 500;
}

.state {
  padding: 2rem 0;
}

.error {
  color: red;
}

/* Layout */
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Image */
.image-wrapper {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  max-width: 100%;
  height: 350px;
  object-fit: contain;
}

/* Details */
.details-wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

/* Purchase Box */
.purchase-box {
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 12px;
  background: #fafafa;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.quantity-controls button {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 6px;
}

.quantity {
  margin: 0 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}

.total {
  margin: 1rem 0;
  font-size: 1.1rem;
}

.add-btn {
  width: 100%;
  padding: 0.75rem;
  background: #111;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
}

.add-btn:hover {
  background: #333;
}

/* Responsive */
@media (max-width: 900px) {
  .product-container {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 280px;
  }
}
</style>
