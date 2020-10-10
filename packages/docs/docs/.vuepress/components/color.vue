<template>
  <div>
      {{data.color}}
    <b-table  hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['token', 'usage', 'value', 'example'],
        items: [
          { isActive: false, token: '$ui-background', usage: 'This is used for the default background', value: '#ffffff'},
          { isActive: false, token: '$interactive-01', usage: 'Primary interactive color & Primary buttons', value: '#0f62fe' },
          { isActive: false, token: '$interactive-02', usage: 'Secondary interactive color & Secondary button', value: '#393939' }
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
