import styled from "styled-components";

type MyButtonProps = {
    dark?: boolean          // Theme style dark = true, light = false
}

/**
 * Style can be "dark" or "light"
 */
 export const MyButton = styled.button<MyButtonProps>`
 background-color: ${props => props.dark? "#6E41E2":"#FFF"};
 border: ${props => props.dark? "none":"1px solid #6E41E2"};
 border-radius: 4px;
 color: ${props => props.dark? "white":"#6E41E2"};
 cursor: pointer;
 font-family: 'Roboto', sans-serif;
 font-size: 12px;
 padding: 5px 10px;
`;
