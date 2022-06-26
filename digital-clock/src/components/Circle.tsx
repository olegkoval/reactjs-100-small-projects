import React, {FC} from "react";

type CProps = {
    circleType: string,
    circleValue: number
}

const Circle: FC<CProps> = ({circleType, circleValue}) => {
    //convert hours into 12h format
    if (circleType === 'hours') {
        circleValue = circleValue > 12 ? circleValue - 12 : circleValue;
    }

    // add leading zero if value is less 10 (one digit)
    const strValue: string = circleValue < 10 ? '0' + circleValue : circleValue.toString();

    return (
        <div className="circle">
            <div className={circleType}>{strValue}</div>
        </div>
    )
}

export default Circle;