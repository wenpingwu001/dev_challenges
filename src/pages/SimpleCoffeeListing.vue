<script setup lang="ts">
import Collections from '../components/Collections.vue';
import useCoffeeList from '../composable/useCoffeeList';
const { status, coffeeList } = useCoffeeList();

</script>
<template>
    <div class="wrapper">
        <div v-if="status === 'loading'">Loading...</div>
        <div v-else-if="status === 'error'">Error loading coffee list</div>
        <Collections v-else :coffee-list="coffeeList" />
    </div>
</template>
<style scoped>
.wrapper {
    background-color: #111315;
    background-image: url('../assets/bg-cafe.jpg');
    background-size: 100% 400px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;

}

.img {
    width: 100%;
    height: 350px;
}
</style>