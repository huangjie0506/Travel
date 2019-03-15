<template>
  <div class='weekend'>
    <div class="wk-group-title">
      <span>周末去哪</span>
    </div>
    <ul class="wk-group-list">
      <li v-for="item in list" :key="item.id">
        <a :href="item.url">
           <div class="imgCon">
             <img src="http://img1.qunarzz.com/sight/p0/1502/f7/f7f32b8108836ce1.water.jpg_200x200_41f56cff.jpg" alt="">
           </div>
           <div class="imgInfo">
             <p class="imgInfo-title">{{item.title}}</p>
             <p class="imgInfo-desc">{{item.desc}}</p>
           </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  data () {
    return {
      list: [
        {
          id: '0001',
          title: '左海海底世界',
          desc: '寻宝、探秘尽在左海海底世界',
          url: 'http:/touch/detail_38615.html?cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E7%25A6%258F%25E5%25B7%259E%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E7%25A6%258F%25E5%25B7%259E',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/aa/aa4d1864e0fa1660.water.jpg_640x276_d02ecaba.jpg'
        },
        {
          id: '0002',
          title: '左海海底世界',
          desc: '寻宝、探秘尽在左海海底世界',
          url: 'http:/touch/detail_38615.html?cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E7%25A6%258F%25E5%25B7%259E%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E7%25A6%258F%25E5%25B7%259E',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/aa/aa4d1864e0fa1660.water.jpg_640x276_d02ecaba.jpg'
        },
        {
          id: '0003',
          title: '左海海底世界',
          desc: '寻宝、探秘尽在左海海底世界',
          url: 'http:/touch/detail_38615.html?cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E7%25A6%258F%25E5%25B7%259E%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E7%25A6%258F%25E5%25B7%259E',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/aa/aa4d1864e0fa1660.water.jpg_640x276_d02ecaba.jpg'
        }
      ]
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
  .wk-group-title
    height: .8rem;
    padding-left 0.24rem
    line-height: .8rem;
    color: $txtColor;
  .wk-group-list
    padding 0 0.24rem
    background-color #fff
    li
      padding 0.12rem 0
      .imgCon
        width 100%
        height 0
        padding-bottom 43.37288%
        overflow hidden
        img
          width 100%
      .imgInfo
        padding: 0.14rem 0.2rem
        line-height 0.54rem
        .imgInfo-title
          color:$txtColor
          font-size:0.36rem
        .imgInfo-desc
          color: #616161;
          font-size: .26rem;
</style>
