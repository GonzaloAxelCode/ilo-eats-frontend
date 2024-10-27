
const CustomRadio = ({ isSelected, onClick, label, selectedStyle = {}, defaultStyle = {} }: any) => {
    // Definición de estilos en objetos
    const radioStyle = {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        border: '2px solid',
        marginRight: '8px',
        backgroundColor: isSelected ? selectedStyle.backgroundColor : 'transparent',
        borderColor: isSelected ? selectedStyle.borderColor : 'gray',
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        cursor: 'pointer',
        borderRadius: '4px',
        backgroundColor: isSelected ? selectedStyle.containerColor : 'transparent',
        ...defaultStyle,
    };

    return (
        <div onClick={onClick} style={containerStyle}>
            <div style={radioStyle}></div>
            <span style={{ color: '#333' }}>{label}</span>
        </div>
    );
};

export default CustomRadio;
