<template>
  <div class='list' ref="wrapper">
    <div>
      <div class="title border-topbottom">当前城市</div>
      <div class="city-wrapper">
        <div class="city">{{currentCity}}</div>
      </div>
      <div class="title border-topbottom">热门城市</div>
      <div class="city-wrapper">
        <div class="city"
        @click="handlecitySelect(item.name)"
        v-for="item in hotCities"
        :key="item.id">
        {{item.name}}
      </div>
      </div>
      <div class="city-content">
        <div class="city-list" v-for="(city,key) in cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="city-item border-bottom" v-for="item in city" :key="item.id">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  computed: {
    ...mapState(['currentCity'])
    // ...mapGetters(['citynum'])
    // citynum () {
    //   return this.$store.getters.citynum
    // }
  },
  props: {
    letter: String,
    cities: Object,
    hotCities: Array
  },
  methods: {
    handlecitySelect (city) {
      this.$store.commit('cityChange', city)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height 0.58rem
      padding-left 0.16rem
      background #fafafa
    .city-wrapper
      display flex
      flex-wrap: wrap;
      padding 0.16rem
      background #ffffff
      box-sizing border-box
      .city
        width 28%
        height 0.56rem
        margin 0.1rem
       line-height 0.56rem
        border 0.01rem solid #ddd
        border-radius 0.06rem
    .city-content
     text-align center
          .city-list
            .city-item
              width 100%
              height 0.64rem
              line-height 0.64rem
              padding-left 0.2rem
</style>
