import VueSatori from "./components/VueSatori.vue";

const install = (Vue) => {
  Vue.component("VueSatori", VueSatori);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
