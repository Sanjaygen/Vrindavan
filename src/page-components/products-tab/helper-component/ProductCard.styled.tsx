import { Card, Typography } from "@mui/material";
import { styled } from "styled-components";

export const MainCardDiv = styled('div')`
    position: relative;
    display: flex;
    gap: 15px;
    // justify-content: space-between;
    // width: 100%;
    // bottom: 100px;   
`;
export const CardStyle = styled(Card)`
    position: relative;
    width: 150px;
`;
export const TypographyOr = styled(Typography)`
    font-weight: bold;
    text-align: center;
    font-size: 13px;
    color: #808080;
`;
export const TypographyCount = styled(Typography)`
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
`;