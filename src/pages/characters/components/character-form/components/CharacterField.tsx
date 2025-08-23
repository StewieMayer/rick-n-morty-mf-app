import { PropsWithChildren } from "react";

interface CharacterFieldProps extends PropsWithChildren {
  label: string;
  htmlFor: string;
}

const CharacterField: React.FC<CharacterFieldProps> = ({
  label,
  htmlFor,
  children,
}) => {
  return (
    <div className="flex flex-col w-1/3 md:w-35 lg:w-50">
      <label htmlFor={htmlFor} className="block text-sm/6 font-medium  px-1">
        {label}
      </label>
      {children}
    </div>
  );
};

export default CharacterField;
