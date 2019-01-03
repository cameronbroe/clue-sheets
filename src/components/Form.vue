<template>
  <div class="form">
    <h1>{{ gameName }}</h1>
    <form id="main-form">
      <div v-if="sharedState.state.board" v-for="type in boardKeys()">
        <CheckboxGroup
          v-bind:type="type"
          />
        <!-- <h2>{{ titlecaseType(type) }}</h2> -->
        <!-- <Checkbox -->
        <!--   v-for="location in sharedState.state.board[type]" -->
        <!--   v-bind:name="location.name" -->
        <!--   v-bind:state="location.state" -->
        <!--   v-bind:type="type" -->
        <!--   /> -->
      </div>
    </form>
  </div>
</template>

<script>
import CheckboxGroup from './CheckboxGroup.vue';
import _ from 'lodash';

export default {
  props: ['gameId', 'gameName'],
  data: function () {
    console.log(this.$root);
    return {
      name: 'Legend of Zelda CLUE',
      sharedState: this.$root.store
    };
  },
  methods: {
    boardKeys: function () {
      let keys = [];
      if (this.sharedState.state.board) {
        keys = Object.keys(this.sharedState.state.board);
      }
      return keys;
    },
    titlecaseType: function (type) {
      return `${_.capitalize(type)}?`;
    }
  },
  created: function () {
    this.sharedState.loadBoard(this.gameId);
  },
  components: { CheckboxGroup }
};
</script>

<style lang="scss">

</style>
