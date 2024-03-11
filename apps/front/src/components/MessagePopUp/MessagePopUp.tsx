import "./messagepopup.scss";
import {useSelector} from "react-redux";

export const MessagePopUp = () => {
    // MESSAGE TYPE: "error" || "warning" || "success"
    const message = useSelector((state:any) => state.message)
    return <div className={`pop-up-message ${message.type}`}><p>{message.value}</p></div>
};