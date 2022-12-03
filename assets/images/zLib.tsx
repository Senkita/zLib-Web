const zLib: (customcolor: string) => JSX.Element = (
    customcolor: string
): JSX.Element => (
    <svg
        id="zLib"
        data-name="zLib"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <rect
            width="512"
            height="512"
            style={{
                fill: "none",
            }}
        />
        <g>
            <line
                x1="116.91"
                y1="24.75"
                x2="395.59"
                y2="24.75"
                style={{
                    fill: "none",
                    stroke: customcolor,
                    strokeMiterlimit: "10",
                    strokeWidth: "25px",
                }}
            />
            <polyline
                points="341.41 24.75 116.41 474.75 269.51 474.75"
                style={{
                    fill: "none",
                    stroke: customcolor,
                    strokeMiterlimit: "10",
                    strokeWidth: "25px",
                }}
            />
            <line
                x1="292.02"
                y1="374.75"
                x2="292.02"
                y2="487.25"
                style={{
                    fill: "none",
                    stroke: customcolor,
                    strokeMiterlimit: "10",
                    strokeWidth: "25px",
                }}
            />
            <line
                x1="292.02"
                y1="318.85"
                x2="292.02"
                y2="346.98"
                style={{
                    fill: "none",
                    stroke: customcolor,
                    strokeMiterlimit: "10",
                    strokeWidth: "25px",
                }}
            />
            <line
                x1="326.43"
                y1="262.25"
                x2="326.43"
                y2="487.25"
                style={{
                    fill: "none",
                    stroke: customcolor,
                    strokeMiterlimit: "10",
                    strokeWidth: "25px",
                }}
            />
            <path
                d="M338.84,362.25c31.07,0,56.25,25.18,56.25,56.25s-25.18,56.25-56.25,56.25"
                style={{
                    fill: "none",
                    stroke: customcolor,
                    strokeMiterlimit: "10",
                    strokeWidth: "25px",
                }}
            />
        </g>
    </svg>
);

export default zLib;
