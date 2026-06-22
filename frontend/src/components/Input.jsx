function Input({

    placeholder,

    value,

    onChange,

    type="text"

}){

    return(

        <input

            type={type}

            placeholder={placeholder}

            value={value}

            onChange={onChange}

            style={{

                width:"100%",

                padding:"12px",

                marginBottom:"15px",

                borderRadius:"8px",

                border:"1px solid #ccc"

            }}

        />

    )

}

export default Input;