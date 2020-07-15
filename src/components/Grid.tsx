import * as React from "react";
import { GridProps } from "../types";
import * as Styled from '../styled';

export const Grid = (props: GridProps) => {
    const {
        gridTitle,
        onClick,
        emptyGrid
    } = props;

    return (
        <Styled.GridItem onClick={onClick}>
            {gridTitle === emptyGrid ? '' : gridTitle}
        </Styled.GridItem>
    )
}
