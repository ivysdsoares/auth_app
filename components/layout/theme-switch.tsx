"use client";

import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { FaMoon, FaSun } from "react-icons/fa";

export interface ThemeSwitch {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export function ThemeSwitch({ className, classNames }: ThemeSwitch) {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: ` ${className} ${classNames?.base} px-px transition-opacity hover:opacity-80 cursor-pointer  }`,
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: `${classNames?.wrapper} w-auto h-auto bg-transparent  flex items-center justify-center group-data-[selected=true]:bg-transparent
          !text-default-500 pt-px px-0 mx-0`,
        })}
      >
        {!isSelected || isSSR ? <FaSun size={22} /> : <FaMoon size={22} />}
      </div>
    </Component>
  );
}
