import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($userId: String) {
    user(userId: $userId) {
      _id
      type
      firstName
      lastName
      email
      username
      companyName
      companyPosition
      status
    }
  }
`;
