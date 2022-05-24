<template>
  <section class="card">
    <div
      class="item-preview"
      :style="{
        'grid-row': item?.row,
        'grid-column': item?.column,
        'background-color': item?.bgcolor,
        'font-size': item?.fontSize || 24 + 'px',
        color: item?.color,
      }"
    >
      <img class="main-pic" :src="item?.imgURL" />
      <div class="actions">
        <button>Details</button>
        <button>Check it out!</button>
      </div>
    </div>
    <div class="title">
      {{ item.name }}
    </div>
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
