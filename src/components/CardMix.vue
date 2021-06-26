<template>
    <div class="cardmix" :style="cssVars">
        <div class="titcard" >
            <p>Urubici, BR</p>
        </div>
        <div class="headercard"></div>
        <div class="sectcard" :style="txtCssVars">
            <p>20<span>°</span></p>
        </div>
        <div class="footercard" :style="ftCssVars">
            <div class="extDt" v-if="extraData">
                <p>HUMIDITY</p>
                <p>PRESSURE</p>
                <p>75<span>%</span></p>
                <p>892<span>hpa</span></p>
            </div>
            <p>Updated at 02:48:27 PM</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardMix",
        props: {
            extraData: {
                type: Boolean,
                default: false
            },
            colorText: {
                type: String,
                default: "#FF6932"
            },
            bgColor: {
                type: String,
                default: '#FFFFFF'
            },
            height: {
                type: String,
                default: "270"
            },
            bgColorFt: {
                type: String,
                default: '#F7F7F7'
            },
            heightFt: {
                type: String,
                default: "90"
            },
            padFt: {
                type: String,
                default: "18"
            }
        },
        computed: {
            cssVars() {
                return {
                    '--bgColor': this.bgColor, 
                    '--height': this.height + 'px'
                };
            },
            ftCssVars() {
                return {
                    '--bgColorFt': this.bgColorFt, 
                    '--heightFt': this.heightFt + 'px',
                    '--padFt': this.padFt + 'px'
                };
            },
            txtCssVars() {
                return {
                    '--colorText': this.colorText,
                };
            },
        }       
    };
</script>

<style lang="scss" scoped>
.cardmix {
    height: var(--height);
    width: 255px;
    left: 507px;
    top: 249px;
    border-radius: 5px;
    background: var(--bgColor);
    box-shadow: 0px 4px 4px 0px #3333331A;
    margin: 50px 50px 25px 25px;
    min-width: 255px;
}

.headercard{
    height: 0px;
    width: 255.00196838378906px;
    left: 204px;
    top: 291px;
    border-radius: nullpx;
    background: #EBEBEB;
    border: 1px solid #EBEBEB;
    // margin: 42px 0 0 0;
}

.footercard {

    width: 255px;
    height: var(--heightFt);
    left: 507px;
    top: 430px;
    border-radius: 5px;
    background: var(--bgColorFt);
}

.footercard>p{
font-size: 12px;
font-style: normal;
font-weight: 600;
text-align: center;
width: 255px;
color:#B4B4B4;
padding: var(--padFt);
}

.titcard {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    height: 42px;
    width: 255px;
    background: #fff;
    padding: 10px;
}

.sectcard {
    
    font-size: 85px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    width: 255px;
    color: var(--colorText);
    padding: 20px;

}

.sectcard>p>span{
    font-size: 75px;
    font-style: normal;
    font-weight: 500;
    color: var(--colorText);
}

.extDt {
    display: flex;
    flex-flow: row wrap;
    padding-top: 10px;
    max-width: 255px;
    font-size: 13px;
}

.extDt>p{
    width: 125px;
    text-align: center;
}
.extDt>p+p{
    width: 125px;
    text-align: center;
}
.extDt>p+p+p{
    font-size: 18px;
}
.extDt>p+p+p>span{
    font-size: 13px;
}
</style>