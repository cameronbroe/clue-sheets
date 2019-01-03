<template>
  <v-icon
    v-bind:class="[color, { checked: checked }]"
    v-bind:name="iconName"
  ></v-icon>
</template>

<script>
export default {
  props: ['checked', 'color'],
  computed: {
    iconColor: function () {
      return this.color;
    },
    iconName: function () {
      if (this.checked) {
        return 'regular/check-square';
      } else {
        return 'regular/square';
      }
    }
  }
};
</script>

<style lang="scss">
@import "styles/settings.scss";

.fa-icon {
  color: $checkbox-black;
  float: right;
}

.fa-icon.green {
  color: $checkbox-green;
}

.fa-icon.red {
  color: $checkbox-red;
}
</style>
