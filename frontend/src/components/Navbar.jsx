import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    function logout() {

        localStorage.removeItem("user");

        navigate("/login");

        window.location.reload();

    }

    return (

        <nav
            style={{
                background: "#1565c0",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <h2 style={{ color: "white" }}>

                ConectaLocal

            </h2>

            {

                user && (

                    <span
                        style={{
                            color: "white"
                        }}
                    >

                        Olá, {user.name}

                    </span>

                )

            }

            <div>

                <Link to="/" style={link}>Home</Link>

                {

                    !user && (

                        <>

                            <Link
                                to="/login"
                                style={link}
                            >
                                Login
                            </Link>

                            <Link
                                to="/novo-usuario"
                                style={link}
                            >
                                Cadastrar usuário
                            </Link>

                        </>

                    )

                }

                {

                    user && (

                        <>

                            <Link
                                to="/novo-anuncio"
                                style={link}
                            >
                                Novo anúncio
                            </Link>

                            <Link
                                to="/ads"
                                style={link}
                            >
                                Meus anúncios
                            </Link>

                            <Link
                                to="/perfil"
                                style={link}
                            >
                                Meu perfil
                            </Link>

                            <span

                                onClick={logout}

                                style={{

                                    ...link,

                                    cursor: "pointer"

                                }}

                            >

                                Logout

                            </span>

                        </>

                    )

                }

            </div>

        </nav>

    )

}

const link = {

    color: "white",

    marginLeft: "20px",

    textDecoration: "none",

    fontWeight: "bold"

}

export default Navbar;