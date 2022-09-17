import React from "react";
import {Box} from "@chakra-ui/react";

import banner from "../../assets/banner.png";

export function Banner() {
  return (
    <Box>
      <img alt="Banner" src={banner} />
    </Box>
  );
}
