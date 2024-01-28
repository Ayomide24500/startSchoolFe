import { createSlice } from "@reduxjs/toolkit";

interface iProps {
  val: string;
  state: boolean;
  id: number;
}

let data = [
  { val: "Nursary School", state: false, id: 1 },
  { val: "Primay School", state: true, id: 2 },
  { val: "Secondary School.", state: false, id: 3 },
  { val: "Tertary School.", state: false, id: 4 },
  { val: "Kindagartin Schhol.", state: false, id: 5 },
];

const initialState = {
  user: "" || null,
  toggle: false,
  delayToggled: false,
  toggleMenu: false,
  showStaffComp: false,
  schoolInfo: {} || null,
  categoryData: data,
  categoryPicked: Array<iProps>,
};

const reduxState = createSlice({
  name: "schoolProject",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },

    getSchoolInfo: (state: any, { payload }) => {
      state.schoolInfo = payload;
    },

    logoutState: (state) => {
      state.user = null;
    },
    categoryState: (state) => {
      state.categoryData = data;
    },

    pickedCategory: (state, { payload }) => {
      state.categoryPicked = payload;
    },

    changeCategoryState: (state, { payload }) => {
      let findData: any = state.categoryData.find((el: any) => {
        return el.id === payload.id;
      });
      findData.state = !findData.state;
    },

    changeMenuState: (state, { payload }) => {
      state.toggle = payload;
    },

    changeToggleMenuState: (state, { payload }) => {
      state.toggleMenu = payload;
    },

    displayStaffComp: (state, { payload }) => {
      state.showStaffComp = payload;
    },

    displayDelay: (state, { payload }) => {
      state.delayToggled = payload;
    },
  },
});

export const {
  loginState,
  logoutState,
  pickedCategory,
  categoryState,
  changeCategoryState,
  getSchoolInfo,
  changeMenuState,
  changeToggleMenuState,
  displayStaffComp,
  displayDelay,
} = reduxState.actions;

export default reduxState.reducer;
