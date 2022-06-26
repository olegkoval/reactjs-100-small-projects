import React, {FC, memo} from "react";

type CProps = {
    circleType: string,
    circleValue: number
}

const STROKE_DASHARRAY_FULL = 440;
const STROKE_DIVIDER_HOURS = 12;
const STROKE_DIVIDER_MIN_SEC = 60;
const DOTS_TRANSFORM_ROTATE_HOURS = 30;
const DOTS_TRANSFORM_ROTATE_MIN_SEC = 6;

const Circle: FC<CProps> = memo(({circleType, circleValue}) => {
    let strokeDivider = STROKE_DIVIDER_MIN_SEC;
    let dotsTransformRotate = DOTS_TRANSFORM_ROTATE_MIN_SEC;

    //convert hours into 12h format
    if (circleType === 'hours') {
        circleValue = circleValue > 12 ? circleValue - 12 : circleValue;
        strokeDivider = STROKE_DIVIDER_HOURS;
        dotsTransformRotate = DOTS_TRANSFORM_ROTATE_HOURS;
    }

    // add leading zero if value is less 10 (one digit)
    const strValue: string = circleValue < 10 ? '0' + circleValue : circleValue.toString();

    const mainDivClasses = `circle svg-${circleType}`;

    const dotsStyle = {transform: `rotate(${circleValue * dotsTransformRotate}deg)`};
    const strokeStyle = {strokeDashoffset: (STROKE_DASHARRAY_FULL - (STROKE_DASHARRAY_FULL * circleValue) / strokeDivider)}

    return (
        <div className={mainDivClasses}>
            <div className="dots" style={dotsStyle}></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id={'circle-' + circleType} style={strokeStyle}></circle>
            </svg>
            <div className={circleType}>
                {strValue}
                <br/>
                <span>{circleType}</span>
            </div>
        </div>
    )
});

export default Circle;