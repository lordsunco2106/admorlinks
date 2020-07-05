import styled from 'styled-components'



 export const ButtonContainer = styled.button`
text-transform:capitalise;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightGreen);
border-color:${props => props.cart ? "var(--mainYellow)" : 
"var(--lightGreen)"};
color:${props => props.cart ? "var(--mainYellow)" : 
"var(--lightGreen)"};
border-radius:0.5rem;
padding:0.2 rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.1rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightGreen);
    color:var(--mainWhite);
    }
    &:focus{
        outline: none;
}

`
