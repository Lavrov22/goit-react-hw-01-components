import styled from 'styled-components';

export const Item = styled.li`
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: calc(100% / 5);
       background-color: ${props => {
        switch(props.label){
            case ".docx":
                return "Cyan";
            case ".pdf":
                return "Violet";
            case ".mp3":
                return "Tomato";
            case ".psd":
                return "Fuchsia";
            }
        }
    }
`;

export const Label = styled.span`
    text-align: center;
    margin-bottom: 5px;
`;
export const Percentage = styled.span`
    font-weight: 700;
    text-align: center;
    console.log(span);
 
`;
