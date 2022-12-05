const sun: () => JSX.Element = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em">
        <g
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={25}
        >
            <path d="M372.36,256 c0,64.27-52.1,116.36-116.36,116.36 s-116.36-52.1-116.36-116.36,52.1-116.36,116.36-116.36,116.36,52.1,116.36,116.36 Z m23.27,0 h116.36 m-512,.14 H116.36 M256,116.36 V0 m0,512 v-116.36 m98.74-238.37 l82.28-82.28 M75.08,437.12 l82.28-82.28 m-.1-197.57 L74.98,74.98 M437.02,437.02 l-82.28-82.28" />
        </g>
    </svg>
);

export default sun;
