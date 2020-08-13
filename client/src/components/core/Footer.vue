<template>
  <div id="footer">
    <img
      :src="require('@/assets/art/blob-bottom-desktop.png')"
      class="hidden-sm-and-down"
      width="100%"
    />

    <v-footer
      class="white--text cFooter px-0 px-md-6 text-center text-md-left"
      height="auto"
    >
      <v-row class="mx-0">
        <v-col cols="12" md="4">
          <div
            class="headline font-weight-bold white--text mb-6 d-inline-flex align-center"
          >
            <v-avatar class="mr-3">
              <v-img :src="require('@/assets/logo-r.png')" />
            </v-avatar>
            Revamp LLC.
          </div>

          <div class="subtitle-1 font-weight-light mb-6 hidden-sm-and-down">
            Revamp LLC (US)<br />
          </div>

          <div class="subtitle-1 font-weight-light mb-0 mb-md-8">
            <a class="white--text" href="#">Legal Notice</a>
            |
            <a class="white--text" href="#">Privacy Policy</a>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="headline font-weight-bold white--text mb-6">
            Sitemap
          </div>
          <router-link
            class="title font-weight-light white--text d-block mb-4"
            to="/about"
          >
            About
          </router-link>
          <a href="#" class="title font-weight-light white--text d-block">
            Other Link
          </a>
          <a href="#" class="title font-weight-light white--text d-block">
            Other Link
          </a>
          <a href="#" class="title font-weight-light white--text d-block">
            Other Link
          </a>
        </v-col>

        <v-col cols="12" md="4">
          <v-row class="text-center" :dense="$vuetify.breakpoint.smAndDown">
            <v-col
              v-for="(social, i) in socials"
              :key="i"
              class="mb-6 mb-md-12 text-center"
              cols="3"
            >
              <v-btn :small="$vuetify.breakpoint.smAndDown" color="black" fab>
                <v-icon color="red" v-text="social.icon" />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "CoreFooter",

  data: () => ({
    socials: [
      { icon: "mdi-twitter", href: "#" },
      { icon: "mdi-discord", href: "#" },
      { icon: "mdi-send", href: "#" },
      { icon: "mdi-reddit", href: "#" },
      { icon: "mdi-bitcoin", href: "#" },
      { icon: "mdi-youtube", href: "#" }
    ]
  })
};
</script>

<style lang="scss">
.cFooter {
  background-color: rgba(0, 0, 0, 0.822) !important;
}
#footer > a {
  text-decoration: none;
}
#footer > img {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 500px;
  opacity: 0.7;
}
// disabled for now
@media screen and (min-width: 960px) {
  #footer {
    margin-top: 0px;
  }
}
</style>
