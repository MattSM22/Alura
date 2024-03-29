import React from "react";
import style from "./botao.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
