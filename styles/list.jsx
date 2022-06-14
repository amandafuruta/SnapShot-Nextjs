import styled from "styled-components"

export const List = styled.section`

    p{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 32px;
        text-align: center;
        margin: 52px 0 40px;
        text-transform: uppercase;
    }

    .listBox{
        display: flex;
        flex-wrap: wrap;

        .imgBox{
            width: 220px;
            height: 165px;
            margin-left: 20px;
            margin-bottom: 20px;
            overflow: hidden;

            img{
                object-fit: cover;
                width: inherit;
                height: inherit;
                

                &:hover{
                    transform: scale(1.25);
                    transition: transform 1.25s;
                }
            }
        }        
    }
`