import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { query, where, onSnapshot } from "firebase/firestore";

export default (await import("vue")).defineComponent({
  name: "HorseDetail",
  props: ["id"],
  data() {
    return {
      horses: [],
    };
  },
  components: {
    // Registering RouterLink as a component
    RouterLink,
  },
  methods: {
    async getHorses() {
      // const data = [];
      try {
        const q = query(collection(firestore, "horses"), where("age", "==", 5));
        onSnapshot(q, (querySnapshot) => {
          const cities = [];
          querySnapshot.forEach((doc) => {
            cities.push(doc.data());
          });
          console.log("Current cities in CA: ", cities);
        });

        const querySnapshot = await getDocs(
          collection(firestore, "horses"),
          this.id
        );
        // collection('horses').doc(horse.id).get()
        querySnapshot.forEach(async (doc) => {
          // Update the document in Firestore
          var data = {
            age: doc.data().age,
            breed: doc.data().breed,
            color: doc.data().color,
            description: doc.data().description.substring(0, 110),
            gender: doc.data().gender,
            name: doc.data().name,
            url: doc.data().url,
          };
          this.horses.push({ id: doc.id, ...data });
        });
        // this.horses = data;
        // console.log(this.horses);
      } catch (error) {
        console.error("Error submitting data:", error.message);
      }
      return this.horses;
    },
  },
  mounted() {
    // Call getHorses when the component is mounted
    this.getHorses();
  },
});
