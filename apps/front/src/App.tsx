import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {MessagePopUp} from "./components";
import {useEffect} from "react";
import {Types} from "types";
import {Login, Home} from "./views";

function App() {
    const dispatch = useDispatch();
    const user: Types.User = useSelector((state: any) => state.user)
    const message = useSelector((state: any) => state.message)


    useEffect(() => {dispatch({type: "DELETE_MESSAGE"})}, []);

    useEffect(() => {
        setTimeout(() => {dispatch({type: "DELETE_MESSAGE"})}, 4000);
    }, [message]);

    return(
        <div className={"app"}>
            {message?.value && <MessagePopUp />}
            <Routes>
                {user ?
                    <Route path="*" element={<Home />} />
                    : <Route path="*" element={<Login/>} />
                }
            </Routes>
        </div>
    )
}

export default App;
