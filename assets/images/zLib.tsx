const zLib: (props: any) => JSX.Element = (props: any): JSX.Element => {
    const { width, color } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={width}
        >
            <g
                fill="none"
                stroke={color}
                strokeMiterlimit={10}
                strokeWidth={25}
            >
                <path d="M116.79,24.75 H395.46 m-54.18,0 L116.29,474.75 h153.1 m22.51-99.99 v112.5 m0-168.4 v28.12 m34.41-84.73 v225 m12.41-12.51 c31.07,0,56.25-25.18,56.25-56.25 s-25.18-56.25-56.25-56.25" />
            </g>
        </svg>
    );
};

export default zLib;
