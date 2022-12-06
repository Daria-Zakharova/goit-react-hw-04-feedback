import { Diagram } from "./ResultsDiagram.styled";

export const ResultsDiagram = ({good, neutral, bad, total}) => {

    return (
        <Diagram good = {good} neutral = {neutral} bad = {bad} total = {total}>
            <div className="total">{total}</div>
        </Diagram>
    );
}