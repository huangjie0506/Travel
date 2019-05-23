<template>
  <div class='detail-header'>
     <router-link to="/" tag="div" class="header-icon" v-show="showTab">
       <i class="iconfont">&#xe624;</i>
     </router-link>
     <div class="header-fixed" v-show="!showTab" :style="{opacity:opacity}">
        <router-link  to="/" tag="div" class="headerLeft"><i class="iconfont">&#xe624;</i></router-link>
        <div class="headerCenter">景点详情</div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTab: true,
      opacity: 0
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        const opa = top / 140
        this.opacity = opa > 1 ? 1 : opa
        this.showTab = false
      } else {
        this.showTab = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.detail-header
  .header-icon
    position: absolute
    left: .2rem
    top: .2rem
    width 0.72rem
    height 0.72rem
    text-align center
    line-height 0.72rem
    background rgba(0,0,0,0.8)
    border-radius 50%
    .iconfont
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    width 100%
    height: 0.86rem
    color: #fff
    line-height: 0.86rem
    background-color: $bgColor
    text-align: center
    .headerLeft
       position absolute
       left 0
       top 0
       width: 0.64rem
</style>
