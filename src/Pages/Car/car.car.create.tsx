import { useNavigate } from "react-router-dom";
import { authContextType, isAuthContextType, useAuth, useIsAuth } from "../../contexts/contexts"
import { useEffect } from "react";
import '../../styles/create-car.css';

export function CreateCar() {

    const { setCurrentUser } = useAuth() as authContextType;
    const { setAuthenticated } = useIsAuth() as isAuthContextType;

    const navigate = useNavigate();

    useEffect(() => {
        fetch('api/auth/verify', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) throw new Error('your session has expired');
                return response.json()
                    .then(data => {
                        if (data?.roleType !== "admin") {
                            navigate('/', { replace: true });
                        }
                    })
            })
            .catch(err => {
                if (err == "Your session has expired") {
                    setAuthenticated(false);
                    setCurrentUser(null);
                    navigate('/', { replace: true });
                }
            })
    }, [])

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let eventData:HTMLInputElement[] = Array.from(e.currentTarget.elements) as HTMLInputElement[];
        const [make,model,name,color] = eventData;
        
        try{
            let response = await fetch('api/car/create', {
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name.value,
                    make:make.value,
                    color:color.value,
                    model:model.value
                })
            })
            let data = await response.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="add-car-form-box">
            <div className="title">
                <h1>Car detail</h1>
            </div>
            <form action="/api/car/create" onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-car-group">
                    <input type="text" name="make" id="make" placeholder="enter a make" required />
                </div>
                <div className="form-car-group">
                    <input type="text" name="model" id="model" placeholder="enter a model" required />
                </div>
                <div className="form-car-group">
                    <input type="text" name="name" id="name" placeholder="enter a name" required />
                </div>
                <div className="form-car-group">
                    <input type="text" name="color" id="color" placeholder="enter a color" required />
                </div>
                <div className="form-car-group">
                    <input type="submit" value="Add a car" />
                </div>
            </form>
        </div>
    )
}