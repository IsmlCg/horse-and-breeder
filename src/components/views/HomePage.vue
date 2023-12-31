<template>
  <div>
    <h1>Home</h1>
    <router-link :to="{ name: 'HorseDetail', params: { id: 1 } }">
      View Horse Detail
    </router-link>
    <router-link :to="{ name: 'RegisterHorse' }"> RegisterHorse </router-link>
  </div>
</template>
  
  <script>
export default {
  name: "HomePage",
};
</script>
  