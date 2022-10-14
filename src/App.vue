<template>
  <div style="align-items: center">
    <VueSatori :config="configuration" :html="htmlContent" />
  </div>
</template>

<script>
import VueSatori from "@/components/VueSatori.vue";

export default {
  name: "AppLayout",
  components: {
    VueSatori,
  },
  data() {
    return {
      htmlContent: `
        <div style="width: 100%; height: 100%; justify-content: center; align-items: center; display: flex; background: red; color: white">
          Hello world!
        </div>
      `,
      configuration: {
        width: 600,
        height: 400,
        fonts: [
          {
            name: "Inter",
            url: "http://localhost:8080/Inter-Regular.ttf",
            weight: 400,
            style: "normal",
          },
        ],
      },
    };
  },
};
</script>
