import { usebackendStore } from "../store/store";
export const useAdminLogout = () => {
    const resetTempAuth = usebackendStore((state) => state.resetTempAuth);
    const logout = async () => {
        console.log('hello')
        resetTempAuth();
    };

    return { logout };
};
