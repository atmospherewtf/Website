export const BASE_URL = () => localStorage?.getItem("local")
    ? "http://localhost:3000"
    : localStorage?.getItem("debug")
        ? "https://dev.apollo.cat"
        : "https://apollo.cat";