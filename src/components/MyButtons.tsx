import styled           from "styled-components";
import { MyCardProps }  from "../interfaces/MyCardInterface";
import { MyButton }     from "./MyButton";
import { useContext }   from 'react';
import { AppContext }   from '../context/AppContext';

export const MyButtons = ({ state }: MyCardProps) => {
  const {cancel, erase} = useContext(AppContext);

  return (
    <>
        {state === "warning" && (
            <ContainerButtons>
                <MyButton dark onClick={erase}>Borrar</MyButton>
                <MyButton onClick={cancel}>Cancelar</MyButton>
            </ContainerButtons>
        )}
        {state === "success" && (
            <ContainerButtons>
                <MyButton dark onClick={cancel}>Cerrar pestaña</MyButton>
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
