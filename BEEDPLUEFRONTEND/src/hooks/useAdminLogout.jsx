import { useTempAuthStore } from "../store/store";
export const useAdminLogout = () => {
  const resetTempAuth = useTempAuthStore((state) => state.resetTempAuth);
  const logout = async () => {
    console.log("hello");
    resetTempAuth();
  };

  return { logout };
};
