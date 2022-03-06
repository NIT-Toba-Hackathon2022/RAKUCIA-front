import { gql } from "@apollo/client";

export const CREATELIST = gql`
  query createList($user_id: String!) {
    createList(user_id: $user_id) {
      id
      recipe_title
      recipe_url
      image_url
      recipe_material
      recipe_indication
      recipe_cost
      add_to_list
      leave_flag
    }
  }
`;
