<template>
  <div id="section-container">
    <div class="unitCard" v-for="unitcd in manifest" :key="unitcd.id">
      <!-- component to assemble the card with the climate data of the cities -->
      <CardMix
        :height="unitcd.mheight"
        :heightFt="unitcd.mheightFt"
        :colorText="unitcd.colorText"
        :nameCity="cities[unitcd.id]"
        :padFt="unitcd.mpadFt"
        :extraData="unitcd.mextraData"
        :tempCity="Math.round(weather[unitcd.id].data.main.temp)"
        :humidCity="weather[unitcd.id].data.main.humidity"
        :pressCity="weather[unitcd.id].data.main.pressure"
        :updateCard="todaysDate('H')"
        v-if="typeof weather != 'undefined'"
      />
    </div>
  </div>
</template>
<script>
import dados from "@/components/apiTest.json";
import CardMix from "@/components/CardMix.vue";
import axios from "axios";
export default {
  name: "Section",
  data() {
    return {
      api_key: "b2e9816a86844d31288e178d11c0d798",
      url_base: "http://api.openweathermap.org/data/2.5/",
      weather_icon: "http://openweathermap.org/img/wn/",
      cities: ["Urubici, BR", "Nuuk, GL", "Nairobi, KE"],
      query: "",
      weather: dados,
      manifest: [
        {
          id: 1,
          mheight: "225",
          mheightFt: "45",
          mcolorText: "#69A3FF",
          mpadFt: "18",
          mextraData: false,
        },
        {
          id: 0,
          mheight: "270",
          mheightFt: "90",
          mcolorText: "#FF6932",
          mpadFt: "18",
          mextraData: true,
        },
        {
          id: 2,
          mheight: "225",
          mheightFt: "45",
          mcolorText: "#ED1946",
          mpadFt: "18",
          mextraData: false,
        },
      ],
    };
  },
  components: {
    CardMix,
  },
  methods: {
    async fetchWeather(e) {
      this.query = e;
      const responseerror = dados;
      const response = await axios.all([
        axios.get(
          `${this.url_base}weather?q=${this.query[1]}&units=metric&appid=${this.api_key}`
        ),
        axios.get(
          `${this.url_base}weather?q=${this.query[0]}&units=metric&appid=${this.api_key}`
        ),
        axios.get(
          `${this.url_base}weather?q=${this.query[2]}&units=metric&appid=${this.api_key}`
        ),
      ]);
      if (response) {
        this.setResults(response);
      } else {
        this.setResults(responseerror);
      }
    },
    setResults(returnedResponse) {
      this.weather = returnedResponse;
      const parsed = JSON.stringify(this.weather)
      localStorage.setItem('weathers',parsed);
    },
    todaysDate(form) {
      let d = new Date();
      if (form == "D") {
        const months = [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ];
        const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
        let month = months[d.getMonth()];
        let day = days[d.getDay()];
        let year = d.getFullYear();
        return `${months} ${month}/${year} ${day}`;
      } else {
        let hour = d.getHours();
        let hmed = hour > 12 ? hour - 12 : hour;
        let minute = d.getMinutes();
        let second = d.getSeconds();
        let meridiem = hour > 12 ? "PM" : "AM";
        return `Updated at ${hmed}:${minute}:${second} ${meridiem}`;
      }
    },
    cleancached(itemcached) {
      localStorage.removeItem(itemcached);
    },
    changColor() {
      this.manifest.forEach((id) => {
         const flag = false;
        if (flag) {
          let ctemp = this.weather[id].data.main.temp;
          if (ctemp <= 5) {
            this.manifest[id].mcolorText = "#69A3FF";
          } else if (ctemp > 5 && ctemp <= 25) {
            this.manifest[id].mcolorText = "#FF6932";
          } else {
            this.manifest[id].mcolorText = "#ED1946";
          }
        }
      });
    },
    debounceGetWeather() {
      setTimeout(() => {
        this.fetchWeather(this.cities);
        this.cleancached('weathers');  
      }, 600000);
    },
  },
  mounted() {
    this.fetchWeather(this.cities);
    
  },
  watch: {
    weather: function () {
      this.debounceGetWeather();
      this.changColor();
    },
  },
};
</script>

<style lang="scss" scoped>
#section-container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
}
</style>
