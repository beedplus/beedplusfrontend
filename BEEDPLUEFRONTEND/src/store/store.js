import { create } from "zustand";
import { persist } from "zustand/middleware";

const usebackendStore = create(
  persist(
    (set) => ({
      userId: null,
      accessToken: null,
      tempuserId: null,
      tempaccessToken: null,
      modal: false,
      ChallengeId: null,
      compareStatus: [],
      setAuth: (id, token) => set({ userId: id, accessToken: token }),
      setTempAuth: (id, token) =>
        set({ tempuserid: id, tempaccessToken: token }),
      resetAuth: () => set({ userId: null, accessToken: null }),
      // setModal: () => set((state) => ({ modal: !state.modal })),
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
