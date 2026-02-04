

function GeneralInputField({labelMsg, type, placeholder, value, onChange}) {
    return (<p>
        {labelMsg && <label>{labelMsg}</label>}
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </p>);
}

export default GeneralInputField;