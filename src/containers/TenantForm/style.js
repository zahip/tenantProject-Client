import styled from 'styled-components';

export const FormContainer = styled.div`
    // border: 2px solid red;
    height: 200px;
`

export const Form = styled.form`
    // border: 2px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Error = styled.div`
    color: red;
    max-height: 80px;
    text-align: center;
`

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-contnet: space-between;
    margin-top: 10px;
    width: 90%;
`

export const Label = styled.label`
    font-size: 20px;
    flex-basis: 30%;
`


export const Input = styled.input`
    height: 20px;
    // border: none;
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
    margin-left: 10px;
    padding-left: 10px;
    flex-basis: 60%
`

export const Button = styled.button`
    font-size: 20px;
    background-color: aqua;
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    margin-top: 30px;
    font-size:16px;
`
