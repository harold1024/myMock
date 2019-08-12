<template>
    <div class="footer">
        <button @click="toggleLang('CN')" >中文</button>
        <button @click="toggleLang('EN')" >英文</button>
    </div>
</template>

<script>
import {mapActions, mapState,mapGetters} from 'vuex'
export default {
	name: "Footer",
	components: {
	},
	methods: {
		//切换方法
		toggleLang(lang) {
			this.$store.dispatch("serUser", lang);
			// if (lang == "CN") {
				localStorage.setItem("locale", this.$store.state.localeLang);
			// 	this.$store.commit("minusPrice", "CN");
			// 	// this.$i18n.locale = localStorage.getItem("locale");
				this.$i18n.locale = this.$store.state.localeLang
				console.log(this.$store.getters.localeLangGet);
			// 	// console.log(localStorage.getItem("locale"));
			// } else if (lang == "EN") {
			// 	localStorage.setItem("locale", "EN");
			// 	this.$store.commit("minusPrice", "EN");
			// 	// this.$i18n.locale = localStorage.getItem("locale");
			// 	this.$i18n.locale = this.$store.state.localeLang
			// 	// console.log(localStorage.getItem("locale"));
			// }
		},
		golist() {
			this.$router.push(`/list`);
		}
	},
	computed:{
		 //在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
		...mapGetters([
			'localeLangGet'
		]),
		// localeLangGet :localStorage.getItem("locale")
		// localeLangGet(){
		// 	// console.log(this.$store.getters.localeLangGet)
		// 	return this.$store.getters.localeLangGet = localStorage.getItem("locale");
		// }
	},
	mounted() {
		console.log(this.$store.getters.localeLangGet);
		this.$i18n.locale = localStorage.getItem("locale");
		// this.$store.state.localeLang = localStorage.getItem("locale");
	}
};
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 40px;
    background: #ccc;
}
</style>