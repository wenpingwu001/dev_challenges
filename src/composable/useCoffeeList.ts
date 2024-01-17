import { ref, onMounted } from "vue";

import { Coffee, PageStatus } from "../types";
function useCoffeeList() {
  const status = ref<PageStatus>("idle");
  const coffeeList = ref<Coffee[] | null>(null);
  onMounted(() => {
    status.value = 'loading';
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        coffeeList.value = data;
        status.value = 'success';
      })
      .catch((error) => {
        console.log(error);
        status.value = 'error'
      });
  });
  return { status, coffeeList };
}

export default useCoffeeList;
