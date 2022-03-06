import { gql } from "@apollo/client";

export const UPDATEFOOD = gql`
  mutation updateFood (
    $id: Float!
    $leave_flag: Int!
    $add_to_list: Int!
  ) {
    updateFood (id: $id, add_to_list: $add_to_list, leave_flag: $leave_flag) {
      leave_flag
      add_to_list
    }
  }
`;
