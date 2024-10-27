
function Checkbox({ label, checked, onChange, }: any) {
    const handleToggle = () => {
        onChange(!checked);
    };

    return (
        <div
            className="flex"
            onClick={handleToggle}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
                className="w-4 h-4 mr-2"
            />
            <label className="text-gray-800">{label}</label>
        </div>
    );
}

export default Checkbox;
