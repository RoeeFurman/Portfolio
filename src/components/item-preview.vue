<template>
  <section
    :style="{
      'grid-row': item?.row,
      'grid-column': item?.column,
      'background-color': item?.color,
      'font-size': item?.fontSize,
    }"
  >
    <li>
      <label>{{ item.name }}</label>
      <img :src="item.imgURL" />
    </li>
    <!-- <article v-if="openPreviewMode">
      <h3>{{ item._id }}</h3>
      <h3>{{ item.name }}</h3>
      <h3>{{ item.email }}</h3>
      <h3>{{ item.phone }}</h3>
    </article> -->
  </section>
</template>

<script>
export default {
  name: "item-preview",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    goToDetail() {
      this.$router.push(`/item/${this.item._id}`);
    },
    goToEdit() {
      this.$router.push(`/item/edit/${this.item._id}`);
    },
    removeItem(itemId) {
      this.$emit("removeItem", itemId);
    },
  },
};
</script>
