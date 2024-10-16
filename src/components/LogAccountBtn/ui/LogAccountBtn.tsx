"use client";

import Image from "next/image";
import cls from "./logAccountBtn.module.scss";
import IMG from "../../../assets/images/images";
import testFoto from "./ddbd82296b3a11eebd93d20dae950626_upscaled.jpeg";
import { useState } from "react";
import { AuthorizationWind } from "../../authorizationWind/ui/AuthorizationWind";

export const LogAccountBtn = () => {
  const [isSubstrate, setSubstrate] = useState(false);

  function substrateOnOff() {
    setSubstrate(!isSubstrate);
  }

  return (
    <>
      <button className={cls.logAccountBtn} onClick={substrateOnOff}>
        <Image src={testFoto ? testFoto : IMG.DefaultPhoto} alt='foto' />
      </button>

      <div
        className={`substrate ${isSubstrate ? "active" : ""}`}
        onClick={substrateOnOff}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <AuthorizationWind />
        </div>
      </div>
    </>
  );
};
