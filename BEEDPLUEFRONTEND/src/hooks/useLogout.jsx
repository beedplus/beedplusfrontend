import { usebackendStore } from "../store/store";
export const useLogout = () => {
  const resetAuth = usebackendStore((state) => state.resetAuth);
  const logout = async () => {
    resetAuth();
  };

  return { logout };
};
