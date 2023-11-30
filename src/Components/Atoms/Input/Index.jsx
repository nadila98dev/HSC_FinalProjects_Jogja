import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder, value, onChange } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default InputForm;
