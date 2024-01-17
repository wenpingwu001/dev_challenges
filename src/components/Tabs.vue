<script setup lang="ts">
const { onclick } = defineProps<{
    activeIndex: number,
    onclick: (index: number) => void
}>()
</script>
<template>
    <div class="tab-container">
        <button @click="onclick(0)" :class="[activeIndex === 0 ? 'tab active' : 'tab']">All Products</button>
        <button @click="onclick(1)" :class="[activeIndex === 1 ? 'tab active' : 'tab']">Available Now</button>
    </div>
</template>

<style scoped>
.tab-container {
    margin: 20px 0px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;

}

.tab {
    border: none;
    background-color: transparent;
    border-radius: 10px;
    padding: 8px 10px;
    color: white;
    outline: none;
}

.active {
    background-color: #6F757C;
}
</style>