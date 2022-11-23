function Input({formik ,name,label, type} : {formik : any ;name : string;label : string; type : string} ) {
    return (
        <div>
            <div className="form-focus">
                <input 
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[name]}
                    type={type} className="form-control floating" 
                />
                <label className="focus-label">{label}</label>
            </div>
            {formik.touched[name] && formik.errors[name] ? (
            <div className="alert alert-danger" role="alert">
                 {formik.errors[name]}
            </div>
          ) : null}
        </div>
    )
}

Input.defaultProps = {
  type : "text",
  label : "label",
}

export default Input