<template>
    <div>
        <ul>
            <!-- <li v-for="(item, index) in this.list" :key="index">{{item}}</li> -->
        </ul>
        {{ $t("message.hello") }}
        {{ $t("message.welcome")}}
        <button @click="gohome()">去home</button>
    </div>
</template>

<script>
// import api from './../servers';
import {getInfo, Message, boyu} from '../servers/offline';
// import {getInfo, Message} from '../servers/online';
export default {
    name: 'Mock',
    data () {
        return {
            list: '',
        }
    },
    methods: {
        getInfoData(){
            let params = {

            }
            getInfo().then(res => {
                // console.log(res)
                let {code, msg} = res;
            })
            Message().then(res => {
                // console.log(res)
                let {code, msg} = res;
                this.list = res;
                // console.log(this.list)

            })
        },
        gohome() {
			this.$router.push(`/`);
		}
    },
    mounted () {
        this.getInfoData();
    }
}
</script>

<style lang="scss" scoped>

</style>