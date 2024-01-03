<template>
  <div className="container content-space-1 content-space-b-lg-3">
    <div className="row mb-7">
      <div className="col-md mb-3 mb-md-0">
        <div className="mb-3">
          <RouterLink className="link link-secondary" to="/">
            <i className="bi-arrow-left small me-1"></i> Back to Listings
          </RouterLink>
        </div>

        <h1 className="mb-0">{{ horse.name }}</h1>
      </div>

      <div className="col-md-auto align-self-md-end">
        <RouterLink className="btn btn-primary" to="/"> Back </RouterLink>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 order-lg-2 mb-5 mb-lg-0">
        <div id="stickyBlockStartPoint">
          <div className="js-sticky-block card card-borderless bg-soft-dark">
            <div className="card-body">
              <dl>
                <dt>Name:</dt>
                <dd>{{ horse.name }}</dd>
                <dt>Breed:</dt>
                <dd>{{ horse.breed }}</dd>
                <dt>Color:</dt>
                <dd>{{ horse.color }}</dd>
                <dt>Gender:</dt>
                <dd>{{ horse.gender }}</dd>
                <dt>Age:</dt>
                <dd>{{ horse.age }}</dd>
                <dt>Date of Birth:</dt>
                <dd>{{ horse.DateOfBirth }}</dd>
                <dt>Sire:</dt>
                <dd>{{ horse.sire }}</dd>
                <dt>Dam:</dt>
                <dd>{{ horse.dam }}</dd>
                <dt>Sire of Dam:</dt>
                <dd>{{ horse.SireOfDam }}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="mb-7">
          <div class="position-relative">
            <img
              class="card-img rounded-3"
              :src="horse.url"
              alt="Image Description"
            />
          </div>
        </div>
        <h4>{{ horse.name }}</h4>
        <p>{{ horse.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { RouterLink } from "vue-router";
export default {
  name: "HorseDetail",
  props: ["id"],
  data() {
    return {
      horse: [],
    };
  },
  components: {
    // Registering RouterLink as a component
    RouterLink,
  },
  methods: {
    calculateAge(dateString) {
      // Step 1: Parse the string date to a JavaScript Date object
      const birthDate = new Date(dateString);

      // Step 2: Calculate the difference between the current date and the parsed date
      const currentDate = new Date();
      const timeDiff = Math.abs(currentDate - birthDate);

      // Step 3: Extract the years from the difference
      const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

      return age;
    },
    async getHorses() {
      // const data = [];
      try {
        const horseRef = doc(firestore, "horses", this.id);
        await getDoc(horseRef)
          .then((data) => {
            if (data.exists()) {
              this.horse = {
                DateOfBirth: data.data().DateOfBirth,
                age: this.calculateAge(data.data().DateOfBirth),
                breed: data.data().breed,
                color: data.data().color,
                description: data.data().description,
                gender: data.data().gender,
                name: data.data().name,
                url: data.data().url,
                sire: data.data().sire,
                dam: data.data().dam,
                SireOfDam: data.data().SireOfDam,
              };
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.error("Error getting document:", error);
          });
      } catch (error) {
        console.error("Error submitting data:", error.message);
      }
    },
  },
  mounted() {
    // Call getHorses when the component is mounted
    this.getHorses();
  },
};
</script>