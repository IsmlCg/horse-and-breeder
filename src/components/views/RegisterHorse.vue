<template>
  <!-- register Form -->
  <div class="overflow-hidden">
    <div class="container content-space-1 content-space-lg-1">
      <form @submit.prevent="submitData">
        <div class="row">
          <div class="col-lg-3 mb-0 mb-lg-0"></div>
          <div class="col-lg-6 mb-10 mb-lg-0">
            <!-- Input Group -->
            <h3>Horse registration</h3>
            <div class="mb-3">
              <label for="FullName" class="form-label"> Name </label>
              <div class="input-group-merge">
                <div
                  class="input-group-prepend input-group-text"
                  id="FullNameAddOn"
                ></div>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="FullName"
                  name="FullName"
                  required
                  placeholder="CORNELLA Z."
                />
              </div>
            </div>
            <!-- End Input Group -->

            <!-- Input Group -->
            <div class="mb-3">
              <label for="Breed" class="form-label">Studbook</label>
              <div class="input-group-merge">
                <div
                  class="input-group-prepend input-group-text"
                  id="BreedAddOn"
                ></div>
                <input
                  v-model="breed"
                  type="text"
                  class="form-control"
                  id="Breed"
                  name="Breed"
                  required
                  placeholder="Studbook"
                />
              </div>
            </div>
            <!-- End Input Group -->

            <!-- Input Group -->
            <div class="mb-3">
              <label for="PhotoLink" class="form-label">Photo link</label>
              <div class="input-group-merge">
                <div
                  class="input-group-prepend input-group-text"
                  id="PhotoLinkAddOn"
                ></div>
                <input
                  v-model="url"
                  type="text"
                  class="form-control"
                  id="PhotoLink"
                  name="PhotoLink"
                  required
                  placeholder="https://horse-and-breeder.web.app/CORNELLA.jpg"
                />
              </div>
            </div>
            <!-- End Input Group -->
            <!-- Input Group -->
            <div class="mb-3">
              <label for="DateOfBirth" class="form-label">Date of Birth</label>
              <div class="input-group-merge">
                <div
                  class="input-group-prepend input-group-text"
                  id="DateOfBirthAddOn"
                ></div>
                <input
                  v-model="DateOfBirth"
                  type="date"
                  pattern="\d{4}-\d{2}-\d{2}"
                  class="form-control"
                  id="DateOfBirth"
                  required
                  name="DateOfBirth"
                  placeholder="Date of Birth"
                />
              </div>
            </div>
            <!-- End Input Group -->
            <!-- Input Group -->
            <div class="mb-3">
              <label for="DescriptionHorse">Description of horse</label>
              <textarea
                v-model="description"
                class="form-control is-invalid"
                required
                name="DescriptionHorse"
                placeholder="Description of horse"
                id="DescriptionHorse"
                rows="4"
              ></textarea>
            </div>
            <!-- End Input Group -->
            <!-- Input Group -->
            <div class="mb-3">
              <label for="gender" class="form-label"> Gender </label>

              <div class="input-group-merge">
                <div class="input-group-prepend input-group-text"></div>
                <select
                  v-model="gender"
                  id="gender"
                  class="form-select"
                  name="gender"
                  required
                >
                  <option value="" disabled selected hidden>
                    Choose a gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Gelding">Gelding</option>
                  <option value="Colt">Colt</option>
                  <option value="Filly">Filly</option>
                </select>
              </div>
            </div>
            <!-- End Input Group -->

            <div class="row gx-3">
              <h4>Pedigree</h4>
              <div class="col-sm-6">
                <!-- Form -->
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="sire"
                    >Sire</label
                  >
                  <input
                    type="text"
                    v-model="sire"
                    class="form-control form-control-lg"
                    name="sire"
                    id="sire"
                    required
                    placeholder="Sire"
                    aria-label="Sire"
                  />
                </div>
                <!-- End Form -->
              </div>

              <div class="col-sm-6">
                <!-- Form -->
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="dam"
                    >Dam</label
                  >
                  <input
                    type="text"
                    v-model="dam"
                    class="form-control form-control-lg"
                    name="dam"
                    id="dam"
                    required
                    placeholder="Dam"
                    aria-label="Dam"
                  />
                </div>
                <!-- End Form -->
              </div>
            </div>

            <div class="row gx-3">
              <div class="col-sm-6">
                <!-- Form -->
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="SireOfDam"
                    >Sire of Dam</label
                  >
                  <input
                    type="text"
                    v-model="SireOfDam"
                    class="form-control form-control-lg"
                    name="SireOfDam"
                    id="SireOfDam"
                    required
                    placeholder="Sire of Dam"
                    aria-label="Sire of Dam"
                  />
                </div>
                <!-- End Form -->
              </div>

              <div class="col-sm-6">
                <!-- Form -->
                <div class="mb-3">
                  <label class="form-label visually-hidden" for="HorseColor"
                    >Colour</label
                  >
                  <input
                    type="text"
                    v-model="color"
                    class="form-control form-control-lg"
                    name="HorseColor"
                    id="HorseColor"
                    required
                    placeholder="Color"
                    aria-label="Color"
                  />
                </div>
                <!-- End Form -->
              </div>
            </div>

            <div class="d-grid">
              <button type="submit" class="btn btn-primary btn-lg">Save</button>
            </div>
          </div>
        </div>
      </form>
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
      DateOfBirth: "",
      gender: "",
      description: "",
      url: "",
      sire: "",
      dam: "",
      SireOfDam: "",
    };
  },
  methods: {
    /**
     * Submits horse data to the Firestore collection.
     * On success, navigates back to the home page.
     * On error, logs the error to the console.
     */
    async submitData() {
      try {
        // Get a reference to the Firestore collection
        const horsesCollection = collection(firestore, "horses");

        // Prepare horse data
        const horseData = {
          name: this.name,
          breed: this.breed,
          color: this.color,
          DateOfBirth: this.DateOfBirth,
          gender: this.gender,
          description: this.description,
          url: this.url,
          sire: this.sire,
          dam: this.dam,
          SireOfDam: this.SireOfDam,
        };

        // Add horse data to the Firestore collection
        await addDoc(horsesCollection, horseData);

        // Navigate back to the home page on successful submission
        this.$router.push("/");
      } catch (error) {
        // Log any errors to the console
        console.error("Error submitting horse data:", error);
      }
    },
  },
};
</script>