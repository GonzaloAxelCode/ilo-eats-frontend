
function Checkbox({ label, checked, onChange, }: any) {
    const handleToggle = () => {
        onChange(!checked);
    };

    return (
        <div
            className="flex items-center cursor-pointer"
            onClick={handleToggle}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
                className="w-3 h-3 mr-2 cursor-pointer"
            />
            <label className="text-[#888888] cursor-pointer">{label}</label>
        </div>
    );
}

export default Checkbox;
