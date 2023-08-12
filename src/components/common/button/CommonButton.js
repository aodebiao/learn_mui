import React, {memo} from 'react';
import {Button} from "@mui/material";

const CommonButton = memo(({children,color,disabled,size,sx,variant}) => {
    return (
        <Button
         color={color}
         disabled={disabled}
         size={size}
         variant={variant}
         sx={sx}
        >
            {children}
        </Button>
    );
});

export default CommonButton;