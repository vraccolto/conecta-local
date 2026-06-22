import { Link } from "react-router-dom";

function Navbar(){

    return(

        <nav
            style={{
                background:"#1565c0",
                padding:"20px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}
        >

            <h2 style={{color:"white"}}>

                ConectaLocal

            </h2>

            <div>

                <Link to="/" style={link}>Home</Link>

                <Link to="/ads" style={link}>Anúncios</Link>

                <Link to="/novo-anuncio" style={link}>Novo anúncio</Link>

                <Link to="/novo-usuario" style={link}>Usuário</Link>

                <Link to="/users" style={link}>Usuários</Link> 

            </div>

        </nav>

    )

}

const link={

    color:"white",

    marginLeft:"20px",

    textDecoration:"none",

    fontWeight:"bold"

}

export default Navbar;