import styled from 'styled-components';
import { AiOutlineExclamation, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

type MyIconProps = {
    state: string,
    color?: string,
}

/**
 * MyIcon can be "warning" | "success" | "error"
 */
export const MyIcon = ({state}: MyIconProps) => {
  return (
      <>
        {state === "warning" && (
            <ContainerIcon state={state} color="255, 217, 18">
                <AiOutlineExclamation size="40" color="#FFD912"/>
            </ContainerIcon>
        )}
        {state === "success" && (
            <ContainerIcon state={state} color="39, 174, 96">
                <AiOutlineCheck size="40" color="#27AE60"/>
            </ContainerIcon>
        )}
        {state === "error" && (
            <ContainerIcon state={state} color="219, 82, 78">
                <AiOutlineClose size="40" color="#DB524E"/>
            </ContainerIcon>
        )}
    </>
  )
}

const my_background_color = (c: string) => {
    return `rgba(${c}, 0.12)`;
}

const ContainerIcon = styled.div<MyIconProps>`
  align-items: center;
  border-radius: 50%;
  background-color: ${props => my_background_color(props.color || "")};
  display: flex;
  justify-content: center;
  height: 76px;
  width: 76px;
`;
