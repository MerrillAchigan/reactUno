

function UserGreeting(props){

    const welcome = <h2 className="welcome">
                        Welcome my suppa nikka
                    </h2> 
    const login = <h2 className="log">
                        Log in b-
                </h2>
    return(props.isLoggedIn   ? welcome   : login );

}

export default UserGreeting