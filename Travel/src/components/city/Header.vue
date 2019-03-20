<template>
  <div class='header'>
    <h4>城市选择</h4>
    <router-link to="/">
      <i class="iconfont">&#xe624;</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/common'
  .header
    position relative
    width 100%
    height 0.86rem
    color #ffffff
    line-height 0.86rem
    text-align center
    background $bgColor
    h4
      font-size 0.32rem
    a
      position absolute
      left 0.1rem
      top 0
      color #fff
      font-size 0.2rem
</style>
