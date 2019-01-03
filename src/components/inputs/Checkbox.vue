<template>
  <div class="form-checkbox" v-on:click.prevent="checkForAnswer">
    <label v-bind:for="id">
      {{ name }} <CheckboxIcon v-bind:checked="checked" v-bind:color="iconColor" />
    </label>
    <input
      class="form-input-checkbox"
      type="checkbox"
      v-bind:id="id"
      v-bind:checked="checked" />
  </div>
</template>

<script>
import CheckboxIcon from '../icons/CheckboxIcon.vue';
import _ from 'lodash';

export default {
  props: ['name', 'state', 'type'],
  data: function () {
    return {
      sharedState: this.$root.store
    };
  },
  computed: {
    id: function () {
      return this.name.toLowerCase().replace(/ /, '-');
    },
    checked: function () {
      return this.state > 0;
    },
    iconColor: function () {
      if (!this.checked) {
        return null;
      } else {
        if (this.state === 1) {
          return 'red';
        } else if (this.state === 2) {
          return 'green';
        }
      }
    }
  },
  methods: {
    checkForAnswer: function () {
      if (this.state === 2) {
        return;
      }

      this.sharedState.togglePossibility(this.name, this.type);
      let board = this.sharedState.state.board[this.type];

      let answerSize = board.length;
      let falseCount = _.filter(board, (entry) => {
        return entry.state === 1;
      }).length;
      if (falseCount === answerSize - 1) {
        let lastOne = _.find(board, (entry) => {
          return entry.state === 0;
        });
        this.sharedState.setCertain(lastOne.name, this.type);
      } else {
        let certainOne = _.find(board, (entry) => {
          return entry.state === 2;
        });
        if (certainOne) {
          this.sharedState.setPossible(certainOne.name, this.type);
        }
      }
    }
  },
  components: { CheckboxIcon }
};
</script>

<style lang="scss" scoped>
.form-checkbox {
  label {
    user-select: none;
    vertical-align: middle;
    padding: 0;
    font-size: 1.5em;
  }

  .fa-icon {
    vertical-align: sub;
  }

  .form-input-checkbox {
    display: none;
  }
}
</style>
