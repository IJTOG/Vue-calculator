export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "vue-calculator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        as: "style",
        onload: "this.onload=null;this.rel='stylesheet'",
        href:
          "https://fonts.googleapis.com/css2?family=Kanit&family=Prompt:wght@300&display=swap"
      }
    ]
  },
  loading: false,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/css/style.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/axios"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
