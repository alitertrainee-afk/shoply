import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  });

  const addItem = (product, quantity) => {
    const existingItem = items.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
      });
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalItems,
    addItem,
    clearCart,
  };
});
