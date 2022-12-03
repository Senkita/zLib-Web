/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false, // 禁用清除浏览器默认样式
    },
    plugins: [],
};
