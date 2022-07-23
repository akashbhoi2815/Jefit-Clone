const Button = {
  baseStyle: {
    fontFamily: "DM Sans- 700",
    fontSize: "12px",
    fontWeight: "600",
  },
  variants: {
    outline: {
      color: "white",
      backgroundColor: "#3cb8ff",
      _hover: {
        background: "white",
        color: "#3cb8ff",
        borderColor: "#3cb8ff",
      },
    },
    ghost: {
      color: "white",
      fontFamily: "DM Sans- 700",
      fontSize: "20px",
      fontWeight: "700",
      backgroundColor: "#00a9ff",
      _hover: {
        background: "white",
        color: "#00a9ff",
        borderColor: "#00a9ff",
      },
    },
  },
};
export default Button;

