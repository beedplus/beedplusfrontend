import { usebackendStore } from "../store/store";
import { useNavigate } from "react-router";
export const useLogout = () => {
  const resetAuth = usebackendStore((state) => state.resetAuth);
  const navigate = useNavigate();

  const logout = async () => {
    resetAuth();
    navigate("/signin");
  };

  return { logout };
};
