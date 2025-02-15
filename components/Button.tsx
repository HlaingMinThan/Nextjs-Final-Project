import Image, { StaticImageData } from "next/image";
import React from "react";

function Button({
  icon,
  children,
  type = "normal",
}: {
  icon?: string | StaticImageData;
  children: React.ReactNode;
  type?: "normal" | "outline";
}) {
  return (
    <button
      className={` w-full  space-x-3 rounded-lg  px-4 py-2 ${
        type === "outline" ? "border-2 border-main" : "bg-main"
      }
    ${icon ? "flex items-center" : ""}
      `}
    >
      {icon && <Image src={icon} alt="icon" width={30} height={30} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
