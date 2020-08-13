<template>
  <v-container
    id="hero"
    class="px-0"
    tag="section"
    :class="$vuetify.breakpoint.smAndDown && 'pt-0'"
  >
    <v-responsive class="overflow-visible" min-height="50vh">
      <v-row
        align="center"
        align-content="center"
        class="fill-height mx-0"
        justify="space-around"
      >
        <v-slide-x-transition v-if="$vuetify.breakpoint.mdAndUp" appear>
          <v-col cols="12" md="6">
            <base-img-card :src="require('@/assets/features/1.png')" />
            <!-- <v-row>
              <v-col cols="4">
                <v-img height="400" :src="require('@/assets/features/2.jpg')"
              /></v-col>
              <v-col cols="4"
                ><base-img-card :src="require('@/assets/features/1.png')" />
              </v-col>
              <v-col cols="4"
                ><v-img
                  height="400"
                  :src="require('@/assets/features/4.jpg')"
                />
              </v-col>
            </v-row> -->
          </v-col>
        </v-slide-x-transition>

        <v-slide-x-reverse-transition appear>
          <v-col cols="12" md="6">
            <h1
              class="font-weight-bold text-center"
              :class="[
                $vuetify.breakpoint.smAndDown
                  ? 'display-2 white--text'
                  : 'display-4'
              ]"
            >
              Revamp
            </h1>

            <h2 class="text-center display-1">Our mission</h2>

            <!-- add links to these -->
            <div
              class="grey--text mb-md-12 mb-6"
              :class="[
                $vuetify.breakpoint.smAndDown
                  ? 'headline text--lighten-1'
                  : 'display-1'
              ]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <!-- <em>today</em> -->
            </div>

            <base-btn height="64" block class="title">Contact Us</base-btn>
          </v-col>
        </v-slide-x-reverse-transition>

        <v-slide-y-reverse-transition appear>
          <v-col class="mt-12" cols="12">
            <base-card class>
              <v-toolbar height="100">
                <v-row>
                  <v-col cols="12">
                    <h1 class="text-center font-weight-bold display-1">
                      Services
                    </h1>
                  </v-col>
                </v-row>
              </v-toolbar>
              <v-row class="text-center pa-12">
                <v-col
                  v-for="(highlight, i) in highlights"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <v-img
                    :src="require(`@/assets/highlights/${highlight.src}`)"
                    class="mb-8"
                    contain
                    max-height="200"
                    width="100%"
                  />

                  <h2
                    class="headline font-weight-bold mb-6"
                    v-text="highlight.title"
                  />

                  <v-responsive
                    max-width="256"
                    class="grey--text body-1 mx-auto"
                    v-text="highlight.text"
                  />
                </v-col>
              </v-row>
            </base-card>
          </v-col>
        </v-slide-y-reverse-transition>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero",

  data: () => ({
    highlights: [
      {
        src: "1.png",
        title: "Web App Development",
        text:
          "Whether your website is for a business or for personal use. We will help design and create a site that will captivate your audiences attention."
      },
      {
        src: "2.png",
        title: "Native App Development",
        text:
          "We believe in the importance of time efficant tools that can help your workflow. In the business world 'Time is Money' and we are here to help develop tools for your business to decrease time and increase productivity."
      },
      {
        src: "3.png",
        title: "Graphic Design",
        text:
          "When it comes to Logos, Banners, Menus, Photo Editing, ect. Revamps design team has you coverd."
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.cTitle {
  font-family: audiowideregular !important;
  font-size: 2em !important;
}
</style>
