<template>
  <div>
    <div>欢迎来到vue</div>
    <Mock></Mock>
    <button @click="golist()">去list</button>
    {{ $t("message.hello") }}
    {{ $t("message.welcome")}}
	<Footer></Footer>
  </div>
</template>

<script>
import Mock from "@/components/mock"; // 是否删除
import Footer from "@/components/footer" // footer
export default {
	name: "Home",
	components: {
		Mock: Mock, //Mock组件
		Footer: Footer
	},
	methods: {
		golist() {
			this.$router.push(`/list`);
		}
	},
	computed:{

	},
	mounted() {
		
	}
};
</script>

<style lang="scss" scoped>
Footer{
	position: fixed;
	bottom: 0;
}
</style>
