import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  photo: [],
 
};

export const UploadPhotoProductSlice = createSlice({
  name: "photoPro",
  initialState,
  reducers: {
    uploadPhoto: (state, action) => {
      const { type, file } = action.payload;
        state.photo.push(file)
    },

    deletePhoto:(state , action)=>{
      // const { typee, file } = action.payload;
      // console.log(typee , 'typeeeeeeeee redixx')
      // const iIndex = state.photo.findIndex(
      //   (item) => item.type === typee
      // );
      state.photo.splice(0, 1);

    },

    deleteAllPhoto:(state , action)=>{
      state.photo = []
    }
  },
});

export const { uploadPhoto,deletePhoto ,deleteAllPhoto} = UploadPhotoProductSlice.actions;

export default UploadPhotoProductSlice.reducer;
