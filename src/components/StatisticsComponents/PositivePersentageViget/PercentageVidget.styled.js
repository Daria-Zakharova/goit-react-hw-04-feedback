import styled from "@emotion/styled";

export const Vidget = styled.div`
position: relative;
margin-right: 20px;
width: 90px;
height: 80px;

text-align: center;
font-size: 30px;

border: 3px solid #3f222d;
border-radius: 4px 4px 40px 40px;

background-image: linear-gradient(#3f222d,  #3f222d44);
color: #3f8125;
background-position: ${({percentage}) => `0 ${percentage ? (80 - (80 / 100 * percentage)) : 80}px`};
background-repeat: no-repeat;

transform: ${({percentage}) => !percentage ? 'translateX(150%)' : 'translateX(0)'};

transition: transform 300ms linear, background-position 300ms linear;
transition-delay: ${({first}) => { 
    console.log(first);
    
    return first ? '0ms, 320ms' : '0ms, 0ms'}};

&::before {
    content: '';
    position: absolute;
    left: 100%;
    top: 4px;
    width: 20px;
    height: 45px;
    border: 3px solid #3f222d;
    border-left: none;
    border-radius: 0 20px 20px 0;
}`;