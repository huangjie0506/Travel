<template>
  <div class='city'>
     <city-header></city-header>
     <city-search :cities="cities"></city-search>
     <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter">
     </city-list>
     <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '../components/city/Header'
import CitySearch from '../components/city/Search'
import CityList from '../components/city/List'
import CityAlphabet from '../components/city/Alphabet'
export default {
  data () {
    return {
      letter: '',
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    handleChange (data) {
      this.letter = data
    }
  },
  mounted () {
    this.$http.get('static/city.json').then((res) => {
      const data = res.data.data
      if (res.status === 200 && res.data.ret) {
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    })
  }
}
</script>
