import { useNavigate } from "react-router-dom";
import { authContextType, isAuthContextType, useAuth, useIsAuth } from "../../contexts/contexts"
import { useEffect } from "react";

export function CreateCar() {

    const { currentUser, setCurrentUser } = useAuth() as authContextType;
    const { isAuthenticated, setAuthenticated} = useIsAuth() as isAuthContextType;

    const navigate = useNavigate();

    useEffect(() => {
        fetch('api/car/verify', {
            method:'POST',
            headers: {
                authorization: "Bearer "+localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(res=>{
            if(!res.ok) throw new Error('an error has occured');
            return res.json()
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
                navigate('/', {replace:true});
            })
        })
        .catch(err=>{
            console.log(err);
            setAuthenticated(false);
            setCurrentUser(null);
            navigate('/', {replace:true});
        })
    }, [])

    return (
        <>
            <div className="title">
                <h1>Add a car</h1>
            </div>
            <form action="/api/car/create" onSubmit={(e) => e.preventDefault()}>
                <div className="form-car-group">
                    <input type="text" name="make" id="make" required />
                </div>
                <div className="form-car-group">
                    <input type="text" name="model" id="model" required />
                </div>
                <div className="form-car-group">
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="form-car-groupe">
                    <input type="text" name="color" id="color" required />
                </div>
            </form>
        </>
    )
}