<template>
  <section>
    <about />
    <div class="item-app">
      <item-list v-if="items" :items="items" />
    </div>
  </section>
</template>

<script>
import itemList from "../components/item-list.vue";
import about from "../components/about.vue";

export default {
  name: "home",
  components: {
    itemList,
    about,
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>
