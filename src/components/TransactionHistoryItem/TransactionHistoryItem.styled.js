import styled from 'styled-components'

export const Table = styled.tr`
    text-align: center;
    :nth-child(odd){
        background-color: white;
    }
    :nth-child(even){
        background-color: Cyan; 
    }
`

export const TD = styled.td`
    color: grey;
`