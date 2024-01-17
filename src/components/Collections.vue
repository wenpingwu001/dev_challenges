<script setup lang="ts">
import { Coffee } from "../types";
import Tabs from "./Tabs.vue";
import CoffeeCard from "./CoffeeCard.vue";
import { computed, ref } from "vue";

const { coffeeList } = defineProps<{
    coffeeList: Coffee[] | null;
}>();

const activeIndex = ref(0);
function onclickTab(index: number) {
    activeIndex.value = index;
}

const filteredCoffeeList = computed(() => activeIndex.value === 0 ? coffeeList : (coffeeList || []).filter(item => item.available));

</script>
<template>
    <div v-if="coffeeList" class="container">
        <h1 class="title">Our Collection</h1>
        <p class="content">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
            expertly
            roasted in small batches and shipped fresh weekly.</p>
        <Tabs :onclick="onclickTab" :active-index="activeIndex" />
        <div class="list">
            <CoffeeCard v-for="coffee in filteredCoffeeList" :key="coffee.name" :coffee="coffee" />
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    background-color: #1B1D1F;
}

.list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
}

.title {
    color: white;
}

.content {
    color: #6F757C;
    max-width: 30%;
    margin: 20px auto;
}
</style>
