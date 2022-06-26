import React, {FC} from "react";

type AProps = {
    ampmValue: string
}

const Ampm: FC<AProps> = ({ampmValue}) => {
    return (
        <div className="ap">
            <div className="ampm">{ampmValue}</div>
        </div>
    );
}

export default Ampm;