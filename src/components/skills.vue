<template>
  <section class="skills">
    <h1 class="projects-title skill">Skills</h1>
    <div class="langs">
      <div class="card" v-for="lang in langs" :key="lang.name">
        <img :src="imgUrl(lang.img)" />
        {{ lang.name }}
      </div>
    </div>
    <div class="langs">
      <div class="card" v-for="framework in frameworks" :key="framework.name">
        <img :src="imgUrl(framework.img)" />
        {{ framework.name }}
      </div>
    </div>
    <div class="langs">
      <div class="card" v-for="add in adds" :key="add.name">
        <img :src="imgUrl(add.img)" />
        {{ add.name }}
      </div>
    </div>
    <img class="paint" src="../assets/img/skills/bro.svg" />
  </section>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      langs: [
        {
          name: "JavaScript",
          img: "js",
        },
        {
          name: "HTML5",
          img: "html",
        },
        {
          name: "CSS",
          img: "css",
        },
      ],
      frameworks: [
        {
          name: "Vue",
          img: "vue",
        },
        {
          name: "React",
          img: "react",
        },
        {
          name: "Angular",
          img: "angular",
        },
      ],
      adds: [
        {
          name: "Node.js",
          img: "node",
        },
        {
          name: "MongoDB",
          img: "mongodb",
        },
      ],
    };
  },
  methods: {
    imgUrl(url) {
      console.log(url);
      return new URL(`../assets/img/skills/${url}.png`, import.meta.url);
    },
  },
};
</script>
