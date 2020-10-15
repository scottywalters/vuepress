<template>
  <div>
    <b-table
      :fields="fields"
      :items="this.data.items"
      responsive="sm"
      head-variant="light"
    >
      <template v-slot:cell(example)="data">
        <b-img
          rounded="circle"
          blank
          :blank-color="data.item.hexValue"
          width="64"
          alt="Color"
          thumbnail
        ></b-img>
        <!-- {{ data.item.hexValue }} -->
        <b-button @click="debug(data.item.hexValue)" v-text="data.item.hexValue"/>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["token", "usage", "hexValue", "example"]
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  methods: {
    debug(event) {
      console.log('hexValue -', event);
    }
  }
};
</script>

<style lang="stylus" scoped>
.img-thumbnail
  padding: 0
</style>
