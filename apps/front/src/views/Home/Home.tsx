import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Api} from "api";
import {Types} from "types";
import {Header} from "../../components";

export const Home = () => {
    const user = useSelector((state: any) => state.user)
    const dispatch = useDispatch();
    const [users, setUsers] = useState<any[]>([])
    const [idUserToFind, srtIdUserToFind] = useState<string>("")
    const [userFound, setUserFound] = useState<Types.User | undefined>()
    const [errMessage, setErrMessage] = useState<string>("")
    async function getAllUsers() {
        return await Api.User.listUser(dispatch)
    }

    useEffect(() => {
        getAllUsers().then(response => setUsers(response))
    }, []);

    function getUserByIdOnClick() {
        Api.User.getUserById(idUserToFind, dispatch).then((res) => {
            if (res.isFound) {
                setErrMessage("")
                setUserFound(res.user[0])
            }
            else {
                setUserFound(undefined)
                setErrMessage(res.message)
            }
        })
    }

    return (
        <div className={"homepage"}>
            <Header />
            <h1>Bonjour {user.email}</h1>
            {users.map((user: Types.User, key: number) => {
                return <p key={key}>{user.name} {user.id}</p>
            })}
            <input type='text' placeholder="User id" onChange={(e: any) => srtIdUserToFind(e.target.value)}/>
            <button onClick={getUserByIdOnClick}>Search</button>
            {userFound && <p>{userFound.email}</p>}
            {errMessage && <p>{errMessage}</p>}
        </div>
    );
};