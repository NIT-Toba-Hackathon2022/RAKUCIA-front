import { gql } from '@apollo/client'

export const createList = gql`
  query createList (
    $user_id: String!
  ) {
    id
    recipe_title
    recipe_url
    image_url
    recipe_material
    recipe_indication
    recipe_cost
  }
`