<template>
  <div>
    <b-table
      :fields="fields"
      :items="this.data.items"
      head-variant="light"
    >
    <template v-slot:cell(token)="data">
      <code>{{ data.item.token }}</code>
    </template>
      <template v-slot:cell(example)="data">
        <b-img
          rounded="circle"
          blank
          :blank-color="data.item.hex"
          width="64"
          alt="Color"
          class="colorSwatch mx-auto d-block"
        ></b-img>
        <code>{{ data.item.hex }}</code>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["token", "usage", "example"]
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus" scoped>
.img-thumbnail
  padding: 0

.colorSwatch
  margin-bottom 8px
</style>
