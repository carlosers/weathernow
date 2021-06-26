<template>
    <div id="section-container">
        <CardMix height="225" heightFt="45" colorText="#69A3FF" />
        <CardMix padFt="18" :extraData=true />
        <CardMix height="225" heightFt="45" colorText="#ED1946" />
    </div>
</template>

<script>
    import CardMix from '@/components/CardMix.vue';
    import axios from "axios";
    export default {
            name: "Section",
            data() {
                return {
                    api_key: "4d85feca7ffb6eb705108d55fd184db7",
                    url_base: "http://api.openweathermap.org/data/2.5/",
                    weather_icon: "http://openweathermap.org/img/wn/",
                    cities: ["Urubici, BR","Nuuk, GL","Nairobi, KE"],
                    query: "",
                    weather: {},
                };
    },
    components: {
            CardMix
    },
    methods: {
        async fetchWeather(e) {
            if (true) {
                this.query = this.cities[0];
                let response = await axios.get(
                `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
                );
                this.setResults(response.data);
        }
        },
        setResults(returnedResponse) {
            this.weather = returnedResponse;
        },
        todaysDate() {
            const months = [
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov",
                "Dec",];
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let d = new Date();
            let month = months[d.getMonth()];
            let day = days[d.getDay()];
            let date = d.getDate();
            let year = d.getFullYear();
            return `${month} ${date} ${day} ${year}`;
        },   
    },
    mounted() {
        this.fetchWeather();
    }
    };
</script>

<style lang="scss" scoped>
#section-container{
     display: flex;
     flex-flow: row wrap;
     align-items: center;
     align-content: center;
     justify-content: space-evenly;
     text-align: center;
}
</style>