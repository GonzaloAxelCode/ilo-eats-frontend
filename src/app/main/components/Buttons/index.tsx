import ButtonDF from "./ButtonDF";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

const TYPE = {
  DEFAULT: "default",
  PRIMARY: "primary",
  ORDER: "order",
};

export default function Button({ type, ...props }: any) {
  switch (type) {
    case TYPE.PRIMARY:
      return <ButtonPrimary {...props} />;
    case TYPE.ORDER:
      return <ButtonSecondary {...props} />;
    default:
      return <ButtonDF {...props} />;
  }
}
