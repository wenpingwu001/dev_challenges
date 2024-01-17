<script setup lang="ts">
import { Coffee } from '../types';
import Star from '../assets/Star.svg'
import StarFilling from '../assets/Star_fill.svg'

const { coffee } = defineProps<{
    coffee: Coffee
}>()
</script>
<template>
    <div class="card">
        <div class="img-container">
            <img :src="coffee.image" :alt="coffee.name" class="img">
            <span class="popular" v-if="coffee.popular">Popular</span>
        </div>
        <div class="content">
            <p>{{ coffee.name }}</p>
            <p class="price">{{ coffee.price }}</p>
        </div>
        <div class="ratingAndVote">
            <img :src="coffee.rating ? StarFilling : Star" alt="rating" class="rating" />
            <p v-if="coffee.rating">{{ coffee.rating }}</p>
            <p v-else>No ratings</p>
            <p v-if="coffee.votes > 0" class="vote">({{ coffee.votes }}votes)</p>
            <p v-if="!coffee.available" class="sold-out">Sold out</p>
        </div>
    </div>
</template>
<style scoped>
.card {
    color: white;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.img-container {
    position: relative;
}

.popular {
    position: absolute;
    font-size: 0.8rem;
    background-color: #F6C768;
    color: black;
    padding: 3px 10px;
    border-radius: 10px;
    z-index: 1;
    left: 10px;
    top: 10px;
}

.price {
    color: #111315;
    background-color: #BEE3CC;
    border-radius: 4px;
    padding: 4px;
    font-size: 0.75rem;
}

.img {
    border-radius: 10px;
}

.rating {
    margin-right: 5px;
}

.ratingAndVote {
    display: flex;
    align-items: center;
}

.vote {
    color: #6F757C;
}

.sold-out {
    color: #ED735D;
    margin-left: auto;
}
</style>