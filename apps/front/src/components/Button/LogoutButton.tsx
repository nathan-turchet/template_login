import { BiLogOut } from "react-icons/bi";
import "./button.scss";
import {useDispatch} from "react-redux";
import {Api} from "api";
export const LogoutButton = () => {
    const dispatch = useDispatch();
    return (
        <button className={"logout-button"} onClick={() => Api.User.logout(dispatch)}>
            <BiLogOut />
        </button>
    );
};