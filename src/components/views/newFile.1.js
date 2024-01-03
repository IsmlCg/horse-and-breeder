import { db } from "../firebase";
import { onMounted, ref } from "vue";

export default (await import("vue")).defineComponent({
  name: "HorseDetail",
  props: ["id"],
  data() {
    return {
      horse: {},
    };
  },
  setup(props) {
    const data = ref(null);
    onMounted(async () => {
      try {
        const docRef = await getHorseById(props.id);
        data.value = docRef.data();
      } catch (error) {
        console.error("Error fetching horse data:", error);
      }
    });

    const getHorseById = async (horseId) => {
      const docRef = await db.collection("horses").doc(horseId).get();
      return docRef;
    };

    return {
      data,
    };
  },
});
