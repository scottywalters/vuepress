<template>
  <div class="scott">
    <!-- <img :src="$withBase('/icons/down-right.svg')" alt="" /> -->
    <a :href="link" class="anchor-link"> {{ text }} </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    text: ""
  }
};
</script>

<style lang="stylus" scoped>
a.anchor-link
    width 40%
    font-weight 600;
    line-height 1.4;
    letter-spacing 0;
    position relative;
    display inline-block;
    color #161616;
    text-decoration none;
    margin-bottom .5rem;
    margin-left 1.5rem;
    &:hover
        color #0f62fe
        text-decoration none

    &::before
        content "\21B3";
        position absolute;
        left -1.5rem;
        cursor pointer;
</style>
