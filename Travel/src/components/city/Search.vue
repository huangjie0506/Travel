<template>
  <div class='search'>
    <div class="searchDiv">
      <input type="text" name="searchInput" v-model="keyword" placeholder="请输入字母或拼音" class="searchInput">
    </div>
    <div class="searchContent" v-show="keyword.length" ref="wrapper">
       <ul>
         <li class="searchItem border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
         <li class="searchItem border-bottom" v-show="!list.length">没有匹配的数据</li>
       </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    list () {
      const result = []
      if (this.keyword === '') {
        return result
      }
      for (let i in this.cities) {
        this.cities[i].forEach(element => {
          if (element.spell.indexOf(this.keyword) > -1 || element.spell.indexOf(this.keyword) > -1) {
            result.push(element)
          }
        })
      }
      return result
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/common'
  .searchDiv
    width 100%
    height 0.72rem
    padding 0.1rem 0.24rem
    background $bgColor
    box-sizing border-box
    .searchInput
      width 100%
      color #333
      padding 0 0.06rem
      line-height 0.52rem
      text-align center
      background-color #fff
      border-radius 0.06rem
      border 1px solid #dddddd
      box-sizing border-box
  .searchContent
    position absolute
    top 1.58rem
    right 0
    left 0
    bottom 0
    overflow hidden
    background #eee
    z-index 9
    li.searchItem
      width 100%
      height 0.56rem
      color #666
      line-height 0.56rem
      padding-left 0.24rem
      background #ffffff
</style>
