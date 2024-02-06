import { create } from "zustand";
import { persist } from "zustand/middleware";

const usebackendStore = create(
  persist(
    (set) => ({
      accessToken: null,
      user: {
        userId: null,
        email: '',
        firstName: '',
        lastName: '',
        tiktok: '',
        tempUserId: null,
        tempAccessToken: null,
      },
      setAuth: (id, token) => set((state) => ({ user: { ...state.user, userId: id },  accessToken: token })),
      setFirstName: (name) => set((state) => ({ user: { ...state.user, firstName: name } })),
      setLastName: (name) => set((state) => ({ user: { ...state.user, lastName: name } })),
      setEmail: (email) => set((state) => ({ user: { ...state.user, email: email } })),
      setTiktok: (tik) => set((state) => ({ user: { ...state.user, tiktok: tik } })),
      setUserId: (id) => set((state) => ({ user: { ...state.user, userId: id } })),
      setTempAuth: (id, token) => set((state) => ({ user: { ...state.user, tempUserId: id, tempAccessToken: token } })),
      resetAuth: () => set({ user: { userId: null, accessToken: null } }),
      setModal: (payload) => set({ modal: payload }),
    }),
    {
      name: "usebackendStore", // name of the item in the storage (must be unique)
    }
  )
);

export { usebackendStore };
