<template>
  <section class="item-app">
    <item-list v-if="items" :items="items" />
  </section>
</template>

<script>
import itemList from "../components/item-list.vue";
export default {
  name: "home",
  components: {
    itemList,
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>
