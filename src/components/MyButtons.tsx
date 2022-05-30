import styled           from "styled-components";
import { MyCardProps }  from "../interfaces/MyCardInterface";

type MyButtonProps = {
    dark?: boolean          // Theme style dark = true, light = false
}

export const MyButtons = ({ state }: MyCardProps) => {
  return (
    <>
        {state === "warning" && (
            <ContainerButtons>
                <MyButton dark>Borrar</MyButton>
                <MyButton>Cancelar</MyButton>
            </ContainerButtons>
        )}
        {state === "success" && (
            <ContainerButtons>
                <MyButton dark>Cerrar pestaña</MyButton>
            </ContainerButtons>
        )}
    </>
  )
}

const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 10px;
`;
/**
 * Style can be "dark" or "light"
 */
const MyButton = styled.button<MyButtonProps>`
    background-color: ${props => props.dark? "#6E41E2":"#FFF"};
    border: ${props => props.dark? "none":"1px solid #6E41E2"};
    border-radius: 4px;
    color: ${props => props.dark? "white":"#6E41E2"};
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    padding: 5px 10px;
`;
