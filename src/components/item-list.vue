<template>
  <div class="main-background">
    <div v-for="n in 15" :key="n">
      <div class="universe-star shining" :style="getRandomPosition()"></div>
    </div>
    <div v-for="n in 15" :key="n">
      <div
        class="universe-star shining-delay"
        :style="getRandomPosition()"
      ></div>
    </div>
    <div v-for="n in 15" :key="n">
      <div
        class="universe-star shining-delay-two"
        :style="getRandomPosition()"
      ></div>
    </div>
  </div>
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
import { utilService } from "../services/utilService.js";

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
    getRandomPosition() {
      return {
        top: utilService.getRandomInt(0, 400) + "px",
        left: utilService.getRandomInt(25, window.innerWidth - 35) + "px",
      };
    },
  },
};
</script>
