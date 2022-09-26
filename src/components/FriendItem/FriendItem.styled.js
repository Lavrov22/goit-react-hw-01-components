import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid grey;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    padding: 5px;
    &:not(:last-child){
        margin-bottom: 10px;
    }
`

export const Name = styled.p`
    margin-left: 10px;
    font-weight: 500;
    font-size: 18px;
`

export const Online = styled.span`
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    background-color: ${props => {
        return props.status && "green";
        }
}`
