import { SAVE_TO_LOCALSTORE } from "../Constants/RecipeConstants";

export const save_to_loacalStore = (data) => async (dispatch) => {
  console.log("data", data);
  const prevData = JSON.parse(localStorage.getItem("recipe"));
  console.log("prevData" , prevData)
  localStorage.setItem("recipe",prevData ? JSON.stringify([...prevData, data]) : JSON.stringify([data]));
  // localStorage.setItem("recipe", JSON.stringify([...prevData, data]));
  dispatch({ type: SAVE_TO_LOCALSTORE, payload: data });
};

// export const get_from_loacalStore = () => async (dispatch) => {
//   const data = JSON.parse(localStorage.getItem("recipe"));
//   console.log("data got from localstorage", data);
//   dispatch({ type: GET_FROM_LOCALSTORE, payload: data });
// };
