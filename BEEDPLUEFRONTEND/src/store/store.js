import { create } from "zustand";
import { persist } from "zustand/middleware";

const usebackendStore = create(
  persist(
    (set) => ({
      accessToken: null,
      activeTab: null,
      user: {
        userId: null,
        email: "",
        firstName: "",
        lastName: "",
        tiktok: "",
        account: {
          bankName: "",
          accountName: "",
          accountNumber: "",
        },
        bio: "",
        userName: "",
        tempUserId: null,
      },
      ChallengeId: null,
      setActiveTab: (tab) =>
        set(() => ({
          activeTab: tab,
        })),
      setAuth: (id, token) =>
        set((state) => ({
          user: { ...state.user, userId: id },
          accessToken: token,
        })),
      setAccount: (name, accountName, accountNo) =>
        set((state) => ({
          user: {
            ...state.user,
            account: {
              bankName: name,
              accountName: accountName,
              accountNumber: accountNo,
            },
          },
        })),
      setFirstName: (name) =>
        set((state) => ({ user: { ...state.user, firstName: name } })),
      setLastName: (name) =>
        set((state) => ({ user: { ...state.user, lastName: name } })),
      setEmail: (email) =>
        set((state) => ({ user: { ...state.user, email: email } })),
      setTiktok: (tik) =>
        set((state) => ({ user: { ...state.user, tiktok: tik } })),
      setBio: (bio) => set((state) => ({ user: { ...state.user, bio: bio } })),
      setUserName: (username) =>
        set((state) => ({ user: { ...state.user, userName: username } })),
      setUserId: (id) =>
        set((state) => ({ user: { ...state.user, userId: id } })),
      setTempAuth: (id, token) =>
        set((state) => ({
          user: { ...state.user, tempUserId: id },
          tempAccessToken: token,
        })),
      resetAuth: () =>
        set({
          user: {
            userId: null,
            email: "",
            firstName: "",
            lastName: "",
            tiktok: "",
            account: {
              bankName: "",
              accountName: "",
              accountNumber: "",
            },
            accessToken: null,
            bio: "",
            userName: "",
          },
          accessToken: null,
        }),

      setModal: (payload) => set({ modal: payload }),
      setChallengeId: (id) => set({ ChallengeId: id }),
      setCompareStatus: (payload) =>
        set({ compareStatus: [...this.state.compareStatus, payload] }),
    }),

    {
      name: "usebackendStore", // name of the item in the storage (must be unique)
    }
  )
);

export { usebackendStore };

const useTempAuthStore = create((set) => ({
  tempAccessToken: null,
  tempUserId: null,
  setTempAuth: (id, token) =>
    set(() => ({
      tempUserId: id,
      tempAccessToken: token,
    })),
  resetTempAuth: () => {
    set({
      tempUserId: null,
      tempAccessToken: null,
    });
  },
}));

export { useTempAuthStore };
