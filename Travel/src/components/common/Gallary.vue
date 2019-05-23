<template>
  <div class='gallary' @click="handlegallhide">
    <div class="contain">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1608/a1/a1d55824e71e57b2a3.img.jpg_350x240_59582492.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1502/f7/f7f32b8108836ce1.water.jpg_350x240_9a664a9c.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handlegallhide () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.gallary >>> .swiper-container
  overflow: inherit
.gallary
  width 100%
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background #000
  z-index 99
  .contain
    height: 0
    width: 100%
    padding-bottom: 100%
    img
      width 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
