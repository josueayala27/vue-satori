<template>
  <div v-html="svg" />
</template>

<script>
import satori from "satori";
import { html } from "satori-html";

export default {
  name: "VueSatoriComponent",
  props: {
    html: { type: null, default: null },
    config: { type: Object, default: () => ({ fonts: [] }) },
  },
  data() {
    return {
      svg: `<div></div>`,
    };
  },
  created() {
    this.initSatori();
  },
  methods: {
    async initSatori() {
      const mapedFonts = await this.parseFonts(this.config.fonts);
      const markup = html(
        `<div style="display: flex; height: 100%; width: 100%">${this.html}</div>`
      );
      const svg = await satori(markup, { ...this.config, fonts: mapedFonts });
      this.svg = svg;
    },
    async parseFonts(fonts) {
      return Promise.all(
        fonts.map(async (font) => {
          const buffer = await fetch("http://localhost:8080/Inter-Regular.ttf");

          return { ...font, data: await buffer.arrayBuffer() };
        })
      );
    },
  },
};
</script>
