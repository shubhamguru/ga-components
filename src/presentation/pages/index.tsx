import { Divider } from "@mui/material";
import React from "react";
import GaBox from "../ga-components/Box/ga-box";
import ContainerWidth from "../ga-components/Container/container-width";
import GaContainer from "../ga-components/Container/GaContainer";
import GaStack from "../ga-components/Stack/GaStack";
import StackDirection from "../ga-components/Stack/stack-direction";

const Index = () => {
  return (
    <div>
      <GaContainer maxWidth={ContainerWidth.XL} disableGutters>
        <GaStack spacing={2} direction={StackDirection.ROW} divider={<Divider orientation="vertical" flexItem/>}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </GaStack>

        <GaBox>
        </GaBox>
      </GaContainer>

    </div>
  );
};

export default Index;
