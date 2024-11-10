import cn from "@/app/utils/cn";

const TYPE = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ORDER: "order",
};

const buttonStyles = {
  [TYPE.PRIMARY]: "cursor-pointer flex items-center justify-center bg-gray-800 text-white rounded-full text-xs uppercase font-bold px-5 py-3 shadow-lg transition-all duration-200 opacity-90 hover:opacity-100",
  [TYPE.SECONDARY]: "cursor-pointer flex items-center justify-center  bg-red-600 text-white rounded-full text-xs uppercase font-bold px-5 py-3 shadow-lg transition-all duration-200 opacity-90 hover:opacity-100",
  [TYPE.ORDER]: "font-medium text-gray-800 px-5 py-2 border-2 border-gray-300 text-center bg-white rounded-full text-xs uppercase h-8 transition-all duration-200 cursor-pointer hover:text-red-600 hover:border-gray-800",
  [TYPE.DEFAULT]: "cursor-pointer bg-red-600 text-white rounded-full text-xs uppercase font-bold px-5 py-3 shadow-lg transition-all duration-200 hover:bg-gray-800",
};

export default function Button({ type = TYPE.DEFAULT, label, children, className, ...props }: any) {
  return (
    <button className={cn(buttonStyles[type], className)} {...props}>
      {label ? label : children}
    </button>
  );
}
