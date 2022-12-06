import styled from '@emotion/styled';

export const FeedbackOptions = styled.ul`
width: fit-content;
max-width: 600px;
margin: 0 auto;
padding: 0 16px;
display: flex;
justify-content: space-around;
gap: 36px;`;

export const FeedbackBtn = styled.button`
border: none;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: box-shadow ease-in 300ms;

&:hover {
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
}`;