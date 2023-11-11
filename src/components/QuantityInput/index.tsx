import { Minus, Plus } from "phosphor-react";
import { IconWraper, QantityInputContainer } from "./styles";

export default function QunatityInput() {
  return (
    <QantityInputContainer>
      <IconWraper>
        <Minus size={14} weight="fill" />
      </IconWraper>
      <input type="number" readOnly value={1} />
      <IconWraper>
        <Plus size={14} weight="fill" />
      </IconWraper>
    </QantityInputContainer>
  )
}