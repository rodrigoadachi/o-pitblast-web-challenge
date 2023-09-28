import { gql } from "@apollo/client";

export const QUERY_LOGIN = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      jwt
      user {
        _id
      }
    }
  }
`;

export const QUERY_FORGOT = gql`
  mutation ForgotPassword($password: String!, $email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;
