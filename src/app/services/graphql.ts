import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

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

const resetToken = onError(({ networkError }) => {});

const authFlowLink = withToken.concat(resetToken);

export const client = new ApolloClient({
  link: authFlowLink.concat(httpLink),
  cache: new InMemoryCache({}),
});
