import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useVerify = (token) => {
  const navigate = useNavigate();
  const verify = async () => {
    const apiUrl = `https://beedplus.onrender.com/auth/verify/${token}`;
    try {
      const response = await axios.get(apiUrl);

      // Axios automatically throws an error for non-2xx responses, so no need to check for !response.ok
      const data = response.data;
      if (data.status === "success") {
        navigate("/auth/signin");
      }
    } catch (error) {
      console.error("Error during verification:", error.message);
    }
  };

  return { verify };
};
