import { usebackendStore } from "../store/store";
export const useAdminLogout = () => {
    const resetTempAuth = usebackendStore((state) => state.resetTempAuth);
    const logout = async () => {
        resetTempAuth();
    };

    return { logout };
};
