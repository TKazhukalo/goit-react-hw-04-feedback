import styled from 'styled-components';

export const ContainerBtn=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
`
export const Button=styled.button`
    border: none;
    border-radius: 2px;
    text-decoration:none;
    background-color: #9e700d;
    height:36px;
    line-height:36px;
    font-size: 20px;
    padding: 0 2rem;
    outline:0;
    color: #fff;
    text-align:center;
    cursor: pointer;
    transition: .2s ease-out;
    text-transform: uppercase;
    &:hover{
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);
        color:#524732;
    }
`