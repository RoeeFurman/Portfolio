<template>
  <section class="card">
    <div class="title">
      {{ item.name }}
    </div>
    <div
      class="item-preview"
      :style="{
        'grid-row': item?.row,
        'grid-column': item?.column,
        'background-color': item?.bgcolor,
        'font-size': item?.fontSize || 24 + 'px',
        'background-image': 'url(' + item?.imgURL + ')',
        color: item?.color,
      }"
    >
      <div class="actions">
        <button>action1</button>
        <button>action2</button>
        <button>action3</button>
      </div>
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
