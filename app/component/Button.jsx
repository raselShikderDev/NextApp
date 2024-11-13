"use client";

const Button = () => {
  return (
    <button
      onClick={() =>
        console.log(
          "Hey i am Button from Contaact Page and my name is Click Here"
        )
      }
      className="bg-blue-500 rounded-sm px-4 py-1 "
    >
      Click Here
    </button>
  );
};

export default Button;
