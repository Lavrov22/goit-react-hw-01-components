import styled from 'styled-components'

export const Profile = styled.div`   
    background-color: #FFFFFF;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
    margin: 20px auto 0 auto;
    width: 300px;
`
export const Description = styled.div`
    margin-bottom: 10px;

`


export const ProfileImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;

`

export const Name = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    color: black;
    margin: 10px 0px 10px 0px;
`

export const TagLocation = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    color: grey;
    margin: 0;
    padding: 5px;
`

export const Stats = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    text-align: center;
   
`

export const StatsItem = styled.li`
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100px;
`

export const Lable = styled.span`    
    font-weight: 400;
    font-size: 14px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    color: grey;
    margin-bottom: 10px;
`

export const Quantity = styled.span` 
    font-weight: 600;
    font-size: 14px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
`