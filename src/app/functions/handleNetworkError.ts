import { useRouter } from "next/navigation";
import { useAuth } from "../context/auth";
import { NetworkError } from "@apollo/client/errors";

export const handleNetworkError = (networkError: NetworkError | undefined) => {
  const { setUser, setError } = useAuth();
  const { push } = useRouter();
  setError(networkError?.message);
  if (
    networkError &&
    networkError?.name === "ServerError" &&
    networkError?.statusCode === 401
  ) {
    window.localStorage.clear();
    setUser(null);
    push("/login");
  }
};
