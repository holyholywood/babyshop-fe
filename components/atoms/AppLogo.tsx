import { Lobster } from "@next/font/google";

const lobsterFont = Lobster({
  weight: "400",
  subsets: ["vietnamese"],
});

const AppLogo = () => {
  return (
    <h1
      className={`${lobsterFont.className} text-white font-extrabold text-2xl tracking-wider`}
    >
      Baby Hui
    </h1>
  );
};

export default AppLogo;
