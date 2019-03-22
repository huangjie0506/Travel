<template>
<div>
  <div class='banner' @click="handlegallshow">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1502/f7/f7f32b8108836ce1.water.jpg_600x330_09226570.jpg" alt="">
    <div class="bannerInfo">
       <div class="title">贵安世界</div>
       <div class="number">
         <i class="iconfont">&#xeac4;</i>
         <span>16</span>
       </div>
    </div>
  </div>
  <common-fade>
    <common-gallary v-show="showFlag" @close="hanglegallhide"></common-gallary>
  </common-fade>
</div>
</template>

<script>
import CommonGallary from '../common/Gallary'
import CommonFade from '../common/Fade'
export default {
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    handlegallshow () {
      this.showFlag = true
    },
    hanglegallhide () {
      this.showFlag = false
    }
  },
  components: {
    CommonGallary,
    CommonFade
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    width 100%
    height 0
    padding-bottom 55%
    overflow hidden
    .banner-img
      width 100%
    .bannerInfo
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      color #ffffff
      line-height 0.6rem
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .title
        flex 1
        padding-left .2rem
      .number
        height 0.48rem
        font-size: .24rem
        line-height 0.48rem
        padding 0 0.3rem
        margin-top 0.06rem
        border-radius 0.1rem
        background: rgba(0, 0, 0, .6)
        .iconfont
          font-size 0.24rem
</style>
