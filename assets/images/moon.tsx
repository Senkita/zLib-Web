const moon: () => JSX.Element = (): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1em"
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={25}
            >
                <path d="M481,312.4 c-26.51,97.16-115.38,168.6-220.97,168.6-126.47,0-229.03-102.56-229.03-229.03,0-105.59,71.44-194.46,168.6-220.9" />
                <path d="M481,312.4 c-19.25,5.25-39.51,8.06-60.43,8.06-126.49,0-229.03-102.54-229.03-229.03,0-20.92,2.8-41.18,8.06-60.43" />
            </g>
        </svg>
    );
};

export default moon;
