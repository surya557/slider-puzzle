import React, { useState, useEffect } from 'react';
import { Grid } from "./Grid";
import {canIExchangeWithYou, exchange, puzzleCompleted, shuffleGrids} from "../utils";
import { PuzzleProps } from "../types";
import * as Styled from '../styled';

const SliderPuzzle = (props: PuzzleProps) => {
    const {
        rows,
        columns
    } = props;
    const emptyGrid = rows * columns;
    // Set initial state as an array of numbers starting from 1.
    const initialNumbers: number[] = Array.from(
        { length: rows * columns },
        (a, b) => b + 1
    );
    const [grids, setGrids] = useState(
        shuffleGrids(initialNumbers, emptyGrid)
    );
    const onClickGrid = (index: number) => {
        const gapIdx: number = grids.indexOf(emptyGrid);
        const canExchange = canIExchangeWithYou(index, gapIdx, columns);

        if (canExchange) {
            const newGrids: number[] = exchange(grids, index, gapIdx);
            setGrids(newGrids);
        }
    };
    const randomShuffle = () => {
        const shuffledNos: number[] = shuffleGrids(grids, emptyGrid);
        setGrids(shuffledNos);
    };
    useEffect(() => {
        if (puzzleCompleted(grids)) {
            alert('Successfully completed game')
        }
    });
    return (
        <>
            <Styled.ShuffleBtn onClick={randomShuffle}>
                Shuffle
            </Styled.ShuffleBtn>
            <Styled.PuzzleLayout columns={columns}>
                {grids.length > 0 && grids.map((gridNo, idx) =>
                    <Grid
                        key={gridNo}
                        onClick={() => onClickGrid(idx)}
                        gridTitle={gridNo}
                        emptyGrid={emptyGrid}
                    />)
                }
            </Styled.PuzzleLayout>
        </>

    );
};

export default SliderPuzzle;
