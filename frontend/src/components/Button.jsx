function Button({

    texto,

    type="button",

    onClick

}){

    return(

        <button

            type={type}

            onClick={onClick}

            style={{

                background:"#1565c0",

                color:"white",

                border:"none",

                padding:"12px 20px",

                borderRadius:"8px",

                cursor:"pointer"

            }}

        >

            {texto}

        </button>

    )

}

export default Button;