import { FC, JSX } from "react";
import Badge from "@mui/material/Badge";
import { BadgeProps } from "@/common/types/badge";

const BadgeComponent: FC<BadgeProps> = ({ icon }): JSX.Element => {
    return (
        <Badge badgeContent={4} color="primary">
            {icon}
        </Badge>
    );
};

export default BadgeComponent;
