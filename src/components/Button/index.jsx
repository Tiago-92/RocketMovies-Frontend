import { FiMail } from "react-icons/fi";

import { Add } from "./styles";

export function Button({ icon: Icon, title }) {

    return(
        <Add>
            {Icon && <Icon size={18} />}
            {title}
        </Add>
    )  
}