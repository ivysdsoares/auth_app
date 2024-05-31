"use client";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

export default function Background({
  lightBackground,
  darkBackground,
  children,
}: {
  children: React.ReactNode;
  lightBackground: string;
  darkBackground: string;
}) {
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  function selectBackground() {
    if (isSSR) {
      return ``;
    } else {
      return `url('${theme == "light" ? lightBackground : darkBackground}')`;
    }
  }

  return (
    <section
      className="h-full overflow-x-visible max-w-[100vw]  flex flex-row items-start  justify-center  bg-cover bg-center py-12 sm:p-12 px-0 "
      style={{
        backgroundImage: selectBackground(),
      }}
    >
      {children}
    </section>
  );
}
