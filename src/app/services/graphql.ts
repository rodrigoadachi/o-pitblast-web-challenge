import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuth } from "../context/auth";
import { useRouter } from "next/navigation";

const httpLink = createHttpLink({
  uri: process.env.BASE_URL,
});

const withToken = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const resetToken = onError(({ networkError }) => {
  const { setUser } = useAuth();
  const { push } = useRouter();
  if (
    networkError &&
    networkError?.name === "ServerError" &&
    networkError?.statusCode === 401
  ) {
    console.log({ networkError });
    window.localStorage.clear();
    setUser(null);
    push("/login");
  }
});

const authFlowLink = withToken.concat(resetToken);

export const client = new ApolloClient({
  link: authFlowLink.concat(httpLink),
  cache: new InMemoryCache({}),
});

/*

const httpLink = createHttpLink({
  uri: process.env.BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({}),
});

*/
