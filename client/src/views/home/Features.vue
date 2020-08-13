<template>
  <v-container id="features" tag="section" style="margin-bottom: 120px;">
    <base-subheading
      class="mb-4"
      subtitle="Applications and life made easy."
      title="Software"
    />
    <v-divider color="white" class="mb-4"></v-divider>

    <v-row align="center">
      <v-col cols="12" md="6">
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="Our team is here to not only help businesses grow, but also give you the tools that can make your life easier. We can build mobile and desktop applications that are specific to and tailored to your business. "
          title="Business specific applications"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/2.jpg')" />
      </v-col>
    </v-row>

    <v-row align="center" class="flex-row-reverse">
      <v-col cols="12" md="6">
        <base-subheading
          :right="$vuetify.breakpoint.mdAndUp"
          subtitle="Desktop, or Mobile. We can build native apps as well as web apps to help meet your needs. Our agile team always designs with device sizes and responsiveness in mind."
          title="Responsive Design"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/3.jpg')" />
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col cols="12" md="6">
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="Anytime, anywhere—The power of CRYPTO is at your fingertips."
          title="Complete Control"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/1.jpg')" />
      </v-col>
    </v-row>
    <base-subheading
      class="mb-4"
      subtitle="We are here to help you on your creative journey and bring your vision to life."
      title="Apps/Games"
    />
    <v-divider color="white" class="mb-4" />
    <v-row align="center" class="flex-row-reverse">
      <v-col cols="12" md="6">
        <base-subheading
          :right="$vuetify.breakpoint.mdAndUp"
          subtitle="Desktop, or Mobile. We can build native apps as well as web apps to help meet your needs. Our agile team always designs with device sizes and responsiveness in mind."
          title="Responsive Design"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/3.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeFeatures"
};
</script>
