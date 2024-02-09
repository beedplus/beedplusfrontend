import { create } from "zustand";
import { persist } from "zustand/middleware";

const usebackendStore = create(
  persist(
    (set) => ({
      accessToken: null,
        tempAccessToken: null,
      user: {
        userId: null,
        email: '',
        firstName: '',
        lastName: '',
        tiktok: '',
        tempUserId: null,

      },
      ChallengeId: null,
      setAuth: (id, token) => set((state) => ({ user: { ...state.user, userId: id },  accessToken: token })),
      setFirstName: (name) => set((state) => ({ user: { ...state.user, firstName: name } })),
      setLastName: (name) => set((state) => ({ user: { ...state.user, lastName: name } })),
      setEmail: (email) => set((state) => ({ user: { ...state.user, email: email } })),
      setTiktok: (tik) => set((state) => ({ user: { ...state.user, tiktok: tik } })),
      setUserId: (id) => set((state) => ({ user: { ...state.user, userId: id } })),
      setTempAuth: (id, token) => set((state) => ({ user: { ...state.user, tempUserId: id } , tempAccessToken: token})),
      resetAuth: () => set({ user: { userId: null } , accessToken: null }),
        resetTempAuth: () => set({ user: { tempUserId: null } , tempAccessToken: null }),
      setModal: (payload) => set({ modal: payload }),
      setChallengeId: (id) => set({  ChallengeId: id }),
      setCompareStatus: (payload) =>
        set({ compareStatus: [...this.state.compareStatus, payload] }),
    }),
    {
      name: "usebackendStore", // name of the item in the storage (must be unique)   
    }
  )
);

export { usebackendStore };
