import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '@/entities/post/model/type';

export interface IViewState {
  selectedPost: IPost | null;
  ui: {
    openCreatePostModal: boolean;
    openEditPostModal: boolean;
    openCheckPostModal: boolean;
  };
}

export const viewInitialState: IViewState = {
  selectedPost: null,
  ui: {
    openCreatePostModal: false,
    openEditPostModal: false,
    openCheckPostModal: false,
  },
};

export const viewSlice = createSlice({
  name: 'view',
  initialState: viewInitialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },

    setOpenCreatePostModal: (state, action) => {
      state.ui.openCreatePostModal = action.payload;
    },
    setOpenEditPostModal: (state, action) => {
      state.ui.openEditPostModal = action.payload;
    },
    setOpenCheckPostModal: (state, action) => {
      state.ui.openCheckPostModal = action.payload;
    },
  },
});

export const {
  setOpenCheckPostModal,
  setOpenCreatePostModal,
  setOpenEditPostModal,
  setSelectedPost,
} = viewSlice.actions;
export default viewSlice.reducer;
