import styled from 'styled-components'

export const HomeStyle = styled.section`
    padding: 20px;

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 960px;
        width: 100%;
        margin: 0 auto;

        h1{
            font-size: 64px;
            text-align: center;
        }

        .search_div{
            display: flex;
            margin-bottom: 40px;

            input{
                font-size: 16px;
                background-color: #edeff0;
                padding: 10px 15px;
                border: 3px solid #d7dbdf;
                border-radius: 5px 0 0 5px;
                outline: none;
                border-right: none;
                width: 398px;
                
            }

            button{
                outline: none;
                border: none;
                padding: 0 15px;
                border-radius: 0 5px 5px 0;
                cursor: pointer;
                
            }

            .lightbutton{
                background-color: #fafafa;
            }
            
            .darkbutton{
                background-color: #000;
            }
        }

        .options{
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 505px;
            width: 100%;

            .btn{
                background: #051c33;
                border-radius: 3px;
                padding: 5px;
                color: #fff;
                font-size: 16px;
                font-family: Arial, Helvetica, sans-serif;
                width: 100px;
                cursor: pointer;
                transition: 0.5s;
                text-align: center;
                text-decoration: none;

                &:hover{
                    background: #184977;
                    border-color: #184977;
                }
            }
        }
    }
`
