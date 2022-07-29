import { Box } from "@mui/system";
import React from "react";
import BoxColors from "./box-colors";

type myProps = {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
};

const GaBox: React.FC<myProps> = (props) => {
  return (
    <Box
      width={props.width}
      height={props.height}
      bgcolor={props.children ? BoxColors.LIGHT : BoxColors.DARK}>

      {props.children}
      
    </Box>
  );
};

export default GaBox;
