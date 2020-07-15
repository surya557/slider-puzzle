import styled from 'styled-components';

export const GridItem = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 25px;
    font-size: 30px;
    text-align: center;
    width: 40px;
    
    &:hover {
        background-color: white;
    }
`;

export const App = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

export const PuzzleLayout = styled.div<{columns: number}>`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, auto);
    background-color: #2196F3;
    padding: 10px;
    cursor: pointer;
`;

export const ShuffleBtn = styled.button`
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 22px;
    width: 80px;
    height: 40px;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;
    
    &:hover {
        color: black;
        background-color: #D4E9FD;
    }
`;
