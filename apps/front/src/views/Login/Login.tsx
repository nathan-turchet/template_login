import "./login.scss"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Api} from "api";
import {Form, Input, Fields} from "./Components";

export const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const [formData, setFormData] = useState({ login: "", password: "" })
    const [errorMessage, setErrorMessage] = useState<string>("")
    function updateFormData(data: {name: string, value: string}) {setFormData({...formData, [data.name]: data.value})}

    async function login(e: any) {
        e.preventDefault();
        await Api.User.login(formData, dispatch)
            .then((response) => {
                dispatch({type: "LOGIN", user: response.user})
            })
            .catch((error) => {
                switch (error.status) {
                    case 401: setErrorMessage(error.data.message); break;
                    default: return;
                }
            })
    }

    function isDisable() {return formData.login !== "" && formData.password !== ""}

    return (
        <div className='login-page'>
            <div className="contain">
                {!user && (
                    <div className="content">
                        <h1>Connexion</h1>
                        <Form>
                            <Fields>
                                <Input
                                    value={formData.login}
                                    placeholder={'Identifiant'}
                                    type={'text'}
                                    dispayName={'Identifiant'}
                                    updateData={updateFormData}
                                    name={"login"}
                                />
                            </Fields>
                            <Fields>
                                <Input
                                    value={formData.password}
                                    placeholder={'Mot de passe'}
                                    type={'password'}
                                    dispayName={'Mot de passe'}
                                    updateData={updateFormData}
                                    name={"password"}
                                />
                            </Fields>
                            <p className={"errorMessage"}>{errorMessage}</p>
                            <Fields>
                                <div className="content-fields">
                                    <button
                                        type='submit'
                                        disabled={!isDisable()}
                                        onClick={login}>Connexion
                                    </button>
                                </div>
                            </Fields>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
};