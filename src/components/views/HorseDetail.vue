<template>
  <div>
    <h1>Horse Detail</h1>
    <p>Name: {{ horse.name }}</p>
    <p>Breed: {{ horse.breed }}</p>
    <p>Color: {{ horse.color }}</p>
    <p>Age: {{ horse.age }}</p>
    <p>Id: {{ id }}</p>

    <router-link to="/">Back to Home</router-link>
  </div>
</template>
  
<script>
export default {
  name: "HorseDetail",
  props: ["id"],
  data() {
    return {
      horse: {},
    };
  },
  created() {
    this.fetchHorseData();
  },
  methods: {
    fetchHorseData() {
      this.horse = {
        name: "Sample Horse",
        breed: "Thoroughbred",
        color: "Bay",
        age: 5,
      };
    },
  },
};
</script>
  