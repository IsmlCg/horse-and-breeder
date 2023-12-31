<template>
  <!-- Contact Form -->
  <div class="overflow-hidden">
    <div class="container content-space-1 content-space-lg-4">
      <div class="row">
        <div class="col-lg-3 mb-0 mb-lg-0"></div>
        <div class="col-lg-6 mb-10 mb-lg-0">
          <!-- Input Group -->
          <div class="mb-3">
            <label for="FullName" class="form-label"> Name </label>
            <div class="input-group-merge">
              <div
                class="input-group-prepend input-group-text"
                id="FullNameAddOn"
              >
                <i class="bi-person"></i>
              </div>
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="FullName"
                placeholder="Ismael C."
              />
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="mb-3">
            <label for="Email" class="form-label">Breed</label>
            <div class="input-group-merge">
              <div class="input-group-prepend input-group-text" id="EmailAddOn">
                <i class="bi-envelope-open"></i>
              </div>
              <input
                v-model="breed"
                type="text"
                class="form-control"
                id="Email"
                placeholder="mark@example.com"
              />
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="mb-3">
            <label for="HorseColor" class="form-label">Color</label>
            <div class="input-group-merge">
              <div
                class="input-group-prepend input-group-text"
                id="HorseColorAddOn"
              >
                <i class="bi-envelope-open"></i>
              </div>
              <input
                v-model="color"
                type="text"
                class="form-control"
                id="HorseColor"
                placeholder="Grey"
              />
            </div>
          </div>
          <!-- End Input Group -->
          <!-- Input Group -->
          <div class="mb-3">
            <label for="HorseAge" class="form-label">Age</label>
            <div class="input-group-merge">
              <div
                class="input-group-prepend input-group-text"
                id="HorseAgeAddOn"
              >
                <i class="bi-envelope-open"></i>
              </div>
              <input
                v-model="age"
                type="text"
                class="form-control"
                id="HorseAge"
                placeholder="Age"
              />
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="mb-3">
            <label for="inputGroupMergeGenderSelect" class="form-label">
              Gender
            </label>

            <div class="input-group-merge">
              <div class="input-group-prepend input-group-text">
                <i class="bi-person"></i>
              </div>
              <select
                v-model="gender"
                id="inputGroupMergeGenderSelect"
                class="form-select"
              >
                <option>Choose a gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <!-- End Input Group -->
          <div class="d-grid">
            <button
              @click="submitData"
              type="submit"
              class="btn btn-primary btn-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "RegisterHorse",
  data() {
    return {
      name: "",
      breed: "",
      color: "",
      age: "",
      gender: "",
    };
  },
  methods: {
    async submitData() {
      try {
        const horsesCollection = collection(firestore, "horses");
        const docRef = await addDoc(horsesCollection, {
          name: this.name,
          breed: this.breed,
          color: this.color,
          age: this.age,
          gender: this.gender,
        });

        console.log("Document written with ID: ", docRef.id);
        // Reset form fields
        this.name = "";
        this.breed = "";
        this.color = "";
        this.age = "";
        this.gender = "";
      } catch (error) {
        console.error("Error submitting data:", error.message);
      }
    },
  },
};
</script>