
const RadioBoxOption = ({ value, isChecked, onChange, label }: any) => (
    <div
        className="flex items-center p-2 cursor-pointer border border-gray-300 rounded-md hover:bg-gray-100"
        onClick={onChange}
    >
        <input
            type="radio"
            value={value}
            checked={isChecked}
            onChange={onChange}
            className="w-4 h-4 mr-2"
        />
        <span className="text-gray-800">{label}</span>
    </div>
);

export default RadioBoxOption;
