<template>
  <h1 class="projects-title">My Projects</h1>
  <ul class="item-list">
    <item-preview
      class="item-preview"
      @removeItem="removeItem"
      v-for="item in items"
      :item="item"
      :key="item._id"
    />
  </ul>
</template>

<script>
import itemPreview from "./item-preview.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    itemPreview,
  },
  methods: {
    removeItem(itemId) {
      this.$emit("removeItem", itemId);
    },
  },
};
</script>
