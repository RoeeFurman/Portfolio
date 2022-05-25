<template>
  <section>
    <about />
    <skills />
    <div class="item-app">
      <item-list v-if="items" :items="items" />
    </div>
  </section>
</template>

<script>
import itemList from "../components/item-list.vue";
import about from "../components/about.vue";
import skills from "../components/skills.vue";
export default {
  name: "home",
  components: {
    itemList,
    about,
    skills,
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>
