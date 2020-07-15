export interface GridProps {
    gridTitle: number;
    onClick: () => void;
    emptyGrid: number;
}

export interface PuzzleProps {
    rows: number;
    columns: number;
}

export class Box {
    row: number = 0;
    column: number = 0;

    constructor(index: number, cols: number) {
        this.row = Math.floor(index / cols);
        this.column = index % cols;
    }
}
