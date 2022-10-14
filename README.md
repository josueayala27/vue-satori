# Vue Satori

This module is a component rendering for vue [satori](https://github.com/vercel/satori) and [satori-html](https://github.com/natemoo-re/satori-html)

> **Note**
> This wrapper extends from [satori](https://github.com/vercel/satori), so you will pass the same settings

## How to use

### Import the component

```vue
<script>
import { VueSatori } from "@/components/VueSatori.vue";

export default {
  components: {
    VueSatori,
  },
  ...
};
</script>
```

### Using the component

```vue
<template>
  <VueSatori :config="configuration" :html="htmlContent" />
</template>

<script>
import VueSatori from "@/components/VueSatori.vue";

export default {
  ...
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
            // If you don't want to convert your fonts to buffer you can simply pass a font url
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
```

### Configuration

* config: an object with supported configuration [see more info](https://github.com/vercel/satori#documentation).
* html: The string of html that will need to be rendered.