<template>
  <div>
    <b-table  :fields="fields" :items="items" responsive="sm" head-variant="light" >
      <template v-slot:cell(example)="data">
        <b-img rounded="circle" blank :blank-color="data.item.hexValue" width="64" alt="placeholder"></b-img>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['token', 'usage', 'hexValue', 'example'],
        items: [
          { token: '$ui-background', usage: 'This is used for the default background', hexValue: '#000000'},
          { token: '$interactive-01', usage: 'Primary interactive color & Primary buttons', hexValue: '#0f62fe' },
          { token: '$interactive-02', usage: 'Secondary interactive color & Secondary button', hexValue: '#393939' },
          { token: '$ui-background', usage: 'This is used for the default background', hexValue: '#000000'},
          { token: '$interactive-01', usage: 'Primary interactive color & Primary buttons', hexValue: '#0f62fe' },
          { token: '$interactive-02', usage: 'Secondary interactive color & Secondary button', hexValue: '#393939' }
        ]
      }
    },
    computed: {
    data () {
      return this.$page.frontmatter
    },
  }
  }
</script>

