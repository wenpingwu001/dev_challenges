<script setup lang="ts">
import bgCafe from '../assets/bg-cafe.jpg'
import Collections from '../components/Collections.vue';
import useCoffeeList from '../composable/useCoffeeList';
const { status, coffeeList } = useCoffeeList();

</script>
<template>
    <div class="container">
        <img :src="bgCafe" />
        <div v-if="status === 'loading'">Loading...</div>
        <div v-else-if="status === 'error'">Error loading coffee list</div>
        <Collections v-else :coffee-list="coffeeList" />
    </div>
</template>
<style scoped>
.container {
    background-color: #111315;
}
</style>