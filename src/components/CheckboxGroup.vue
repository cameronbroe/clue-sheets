<template>
  <div>
    <h2>{{ titlecaseType(type) }}</h2>
    <Checkbox
      v-for="location in locations"
      v-bind:name="location.name"
      v-bind:state="location.state"
      v-bind:type="type"
      />
  </div>
</template>

<script>
import Checkbox from './inputs/Checkbox.vue';
import _ from 'lodash';

export default {
  props: ['type'],
  data: function () {
    return {
      sharedState: this.$root.store
    };
  },
  computed: {
    locations: function () {
      if (this.sharedState.state.board) {
        return this.sharedState.state.board[this.type];
      }
    }
  },
  methods: {
    titlecaseType: function (type) {
      return `${_.capitalize(type)}?`;
    }
  },
  components: { Checkbox }
};
</script>

<style scoped>

</style>
