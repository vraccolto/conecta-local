function Profile() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {

        return (

            <div
                style={{
                    maxWidth: "600px",
                    margin: "40px auto",
                    textAlign: "center"
                }}
            >

                <h1>Acesso negado</h1>

                <p>
                    Faça login para acessar seu perfil.
                </p>

            </div>

        );

    }

    return (

        <div
            style={{
                maxWidth: "700px",
                margin: "40px auto",
                textAlign: "center"
            }}
        >

            <h1>Meu perfil</h1>

            <div
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow:
                        "0 2px 8px rgba(0,0,0,.1)",
                    textAlign: "center"
                }}
            >

                <p>

                    <strong>ID:</strong>

                    {" "}

                    {user.id}

                </p>

                <p>

                    <strong>Nome:</strong>

                    {" "}

                    {user.name}

                </p>

                <p>

                    <strong>Email:</strong>

                    {" "}

                    {user.email}

                </p>

            </div>

        </div>

    );

}

export default Profile;