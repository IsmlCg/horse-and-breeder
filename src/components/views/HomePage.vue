<template>
  <div
    class="container content-space-b-2 content-space-b-lg-1 content-space-1 overflow-hidden"
  >
    <div class="row row-cols-1 row-cols-sm-2 gx-7">
      <div
        class="col mb-7 mb-md-10"
        v-for="(horse, index) in horses"
        :key="index"
      >
        <!-- Card -->
        <router-link
          v-if="horse && horse.id"
          :to="{ name: 'HorseDetail', params: { id: horse.id } }"
          class="card card-ghost h-100"
        >
          <div class="row">
            <div class="col-lg-5 mb-3 mb-lg-0">
              <img class="card-img" :src="horse.url" alt="Image Description" />
            </div>
            <!-- End Col -->

            <div class="col-lg-7">
              <h4>{{ horse.name }}</h4>

              <p class="card-text">
                {{ horse.description }}
                <a href=" ">...</a>
              </p>
              <span class="card-link">Read more</span>
            </div>
            <!-- End Col -->
          </div>
          <!-- End Row -->
        </router-link>
        <!-- End Card -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Row -->

    <!-- Pagination -->
    <nav class="d-flex justify-content-center" aria-label="Page navigation">
      <ul
        class="pagination justify-content-center justify-content-sm-start mb-0"
      >
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">
            <span aria-hidden="true">«</span>
          </a>
        </li>

        <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="getHorses" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
      <!-- End Col -->
    </nav>
    <!-- End Pagination -->
  </div>
</template>

<script>
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "HomePage",
  data() {
    return {
      horses: [],
    };
  },
  methods: {
    // Fetch horses data from Firestore
    async getHorses() {
      try {
        // Get documents from Firestore collection
        const querySnapshot = await getDocs(collection(firestore, "horses"));

        // Process each document
        querySnapshot.forEach(async (doc) => {
          // Truncate description to a maximum of 110 characters
          const truncatedDescription = doc.data().description.substring(0, 110);

          // Extract relevant data
          const horseData = {
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            description: truncatedDescription,
          };

          // Add the processed data to the horses array
          this.horses.push(horseData);
        });
      } catch (error) {
        console.error("Error fetching horse data:", error.message);
      }
    },
  },
  mounted() {
    // Call getHorses when the component is mounted
    this.getHorses();
  },
};
</script>