import React, { type VFC } from "react";
/*import { Box, Image, Text, Link, Icon, Checkbox } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { useMutation } from "@apollo/client";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { UPDATEFOOD } from "../querys/updateFood";

export type FoodProps = {
  id: number;
  recipe_title: string;
  recipe_url: string;
  image_url: string;
  recipe_indication: string;
  recipe_cost: string;
};

export const Food: VFC<FoodProps> = ({
  id,
  recipe_title,
  recipe_url,
  image_url,
  recipe_indication,
  recipe_cost,
}) => {
  //const [updateFood, { loading, error, data }] = useMutation(UPDATEFOOD);
  return (
    <Box p={4} display={"flex"}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={40}
          src={image_url}
          alt={recipe_title}
        />
      </Box>
      <Box mt={0} ml={6}>
        <Link
          mt={1}
          display="block"
          fontSize="2xl"
          lineHeight="normal"
          fontWeight="semibold"
          color="orange.500"
          href={recipe_url}
        >
          {recipe_title}
        </Link>
        <Box display={"flex"} alignItems={"center"}>
          <TimeIcon w={5} h={5} />
          <Text fontSize="xl" color="gray.500">
            {recipe_indication}
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Icon as={RiMoneyCnyCircleLine} w={6} h={6} />
          <Text fontSize="xl" color="gray.500">
            {recipe_cost}
          </Text>
        </Box>
      </Box>
      <button
        onClick={() =>
          updateFood({
            variables: {
              id: id,
              update_data: { add_to_list: 1, leave_flag: 0 },
            },
          })
        }
      >
        <Checkbox w={2} colorScheme="orange" />
      </button>
    </Box>
  );
};
*/