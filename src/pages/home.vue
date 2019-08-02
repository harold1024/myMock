<template>
    <div>
        <div>欢迎来到vue</div>
        <Mock></Mock>
    </div>
</template>

<script>
import Mock from "@/components/mock"; // 是否删除
export default {
    name: 'Home',
    components: {
		Mock: Mock, //Mock组件
	},
}
</script>

<style lang="scss" scoped>

</style>
