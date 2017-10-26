<template>
  <v-ons-navigator swipeable swipe-target-width="50px"
                   :page-stack="pageStack"
                   :pop-page="storePop"
                   :options="options"
                   @postpush="showPopTip"
  ></v-ons-navigator>
</template>

<script>
  import App from './App.vue';
  export default {
    beforeCreate() {
      this.$store.commit('navigator/push', App);
    },
    data() {
      return {
        shutUp: this.md
      }
    },
    computed: {
      pageStack() {
        return this.$store.state.navigator.stack;
      },
      options() {
        return this.$store.state.navigator.options;
      }
    },
    methods: {
      storePop() {
        this.$store.commit('navigator/pop');
      },
      showPopTip() {

      }
    }
  };
</script>
