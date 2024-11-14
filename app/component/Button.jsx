"use client";

import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

const Button = () => {
  return (
    <button
      onClick={() =>
        console.log(
          "Hey i am Button from Contaact Page and my name is Click Here"
        )
      }
      className={`bg-blue-500 rounded-sm px-4 py-1 ${roboto.className}`}
    >
      Click Here
    </button>
  );
};

export default Button;
