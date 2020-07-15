import { Box } from "./types";

export function shuffleGrids (grids: number[], empty: number): number[] {
    // Extract empty item and concat it at the end.
    const removeEmptyGridFromArray: number[] = grids.filter(g => g !== empty);
    const shuffled = shuffle(removeEmptyGridFromArray);
    grids = [...shuffled, empty];

    return grids;
}

function shuffle(grids: number[]): number[] {
    /*
        The return value in compare fn would be either negative or positive.
        Therefore compare fn will sort items based on that value and gives a random order.
    */
    return grids.sort(() => Math.random() - 0.5);
}

export function canIExchangeWithYou (idx: number, emptyIndex: number, cols: number): boolean {
    const clickedBox: Box = new Box(idx, cols);
    const emptyBox: Box = new Box(emptyIndex, cols);
    let rowDiff: number = clickedBox.row - emptyBox.row;
    let colDiff: number = clickedBox.column - emptyBox.column;
    if (rowDiff < 0) {
        rowDiff = rowDiff * -1;
    }
    if (colDiff < 0) {
        colDiff = colDiff * -1;
    }
    // can swap only if empty box position is closer by 1 level.
    const closerPos: boolean = rowDiff + colDiff === 1;
    return closerPos;
}

export function exchange (grids: number[], idx: number, emptyIndex: number): number[] {
    // Swap the clicked grid with empty grid
    let temp = grids[idx];
    grids[idx] = grids[emptyIndex];
    grids[emptyIndex] = temp;

    return grids.slice();
}

export function puzzleCompleted(grids: number[]) {
    /*
    To finish the game ALL the numbers must be in the order starting from 1 and ending with 15.
    If any of the sequence doesn't match, return false else return true.
    */

    return grids.every((grid, index) => grid === index + 1);
}
