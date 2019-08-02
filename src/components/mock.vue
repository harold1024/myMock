<template>
    <div>
        <div>欢迎来到vue</div>
    </div>
</template>

<script>
// import api from './../servers';
import {getInfo, Message} from '../servers/offline';
// import {getInfo, Message} from '../servers/online';
export default {
    name: 'Mock',
    data () {
        return {

        }
    },
    methods: {
        getInfoData(){
            console.log(123)
            getInfo().then(res => {
                console.log(res)
                let {code, msg} = res;
                // if(code != 200) {
                //     this.$message({
                //         message: msg,
                //         type: 'warning'
                //     });
                // }else{
                //     this.$message({
                //         message: msg,
                //         type: 'success'
                //     });
                //     this.$emit('isShow');
                //     this.formData = {};
                // }
            })
            // api.mockdata('/data/index')
            //     .then(res => {
            //         console.log(res);
            //         this.dataShow = res.data;
            //     })
            Message().then(res => {
                console.log(res)
                let {code, msg} = res;
            })
        }

    },
    mounted () {
        this.getInfoData();
    }
}
</script>

<style lang="scss" scoped>

</style>