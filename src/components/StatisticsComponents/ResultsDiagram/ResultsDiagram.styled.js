import styled from "@emotion/styled";

export const Diagram = styled.div`
width: 100px;
aspect-ratio: 1;
display: flex;
position: relative;

transform: ${({total}) => !total ? 'translateX(-100%)' : 'translateX(0)'};
justify-content: center;
align-items: center;
transition: transform linear 300ms, display linear 300ms;

&::before {
    content: "";
    position: absolute;
    border: solid 2px #3f222d;
    border-radius: 50%;
    inset: 0;
    background: ${({good, neutral, bad}) => `conic-gradient(#3f8125, #3f8125 ${good}%, orange ${good}%, orange ${good + neutral}%, red ${good + neutral}%, red ${good + neutral + bad}%, transparent 0)`};
}

.total {
    position: absolute;
    width: 50px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #3f222d;
    color: #d8996d;

}
`;