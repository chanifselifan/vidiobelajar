import { createSlice } from '@reduxjs/toolkit';
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const analytics = getAnalytics(app);
const db = getFirestore(app);

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    db: db,
    analytics: analytics,
  },
  reducers: {
    updateDb: (state, action) => {
      state.db = action.payload;
    },
    
  },
});

export const { updateDb } = firebaseSlice.actions;
export default firebaseSlice.reducer;
