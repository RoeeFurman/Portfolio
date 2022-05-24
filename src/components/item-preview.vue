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
      <img class="main-pic" :src="imgUrl" />
      <div class="actions">
        <button>Details</button>
        <a :href="item.webURL" target="_blank">Check it out!</a>
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
  computed: {
    imgUrl() {
      return new URL(`../assets/img/${this.item.imgURL}.png`, import.meta.url);
    },
  },
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
