<template id="main">
  <v-ons-page>
    <page1/>
<page2/>
    <v-ons-toolbar>
      <div class="center">{{ titles }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>



<div id="app"></div>

<script>
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export default {
  name: 'app',
  data() {
    return {
      titles: 'Fatmaster',
      activeIndex: 0,
      tabs: [
        {
          // icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: Page1,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          // icon: this.md() ? null : 'ion-ios-bell',
          label: 'Page 2',
          page: Page2,
          badge: 7,
          key: "newsPage"
        },
      ]
    }
  },
  components: {
    Page1,
    Page2
  },
    methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
}
</script>


