<template>
 <div class="header">
     <div class="headerLeft"><i class="iconfont">&#xe624;</i></div>
     <div class="headerCenter"><i class="iconfont search-icon">&#xe632;</i>输入城市/景点/游玩主题</div>
     <div class="headerRight">{{city}}<i class="iconfont drop-icon">&#xe64a;</i></div>
 </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.header
    display flex
    height: 0.86rem
    color: #fff
    line-height: 0.86rem
    background-color: $bgColor
    .headerLeft
        width: 0.64rem
        text-align: center
    .headerCenter
        flex:1
        height: 0.64rem
        margin-top: 0.12rem
        margin-left: 0.1rem
        line-height: 0.64rem
        background-color: #fff
        border-radius:0.1rem
        color:#ccc;
        .search-icon
            padding: 0 0.08rem
    .headerRight
        width: 1.24rem
        text-align: center
        .drop-icon
            font-size: 0.2rem
            padding-left: 0.1rem
</style>
