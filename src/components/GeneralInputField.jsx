

function GeneralInputField({labelMsg, type, placeholder, value, onChange}) {
    return (<div className="field">
        {labelMsg && <label className="label">{labelMsg}</label>}
        <div className="control">
            <input className={type === 'checkbox' ? 'checkbox' : 'input'} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    </div>);
}

export default GeneralInputField;