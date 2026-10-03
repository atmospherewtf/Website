import { ViteReactSSG } from 'vite-react-ssg'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {BrowserRouter} from "react-router-dom";
// import App from "./App.tsx";
import {routes} from "./App.tsx";

// createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//         {/*location={"/"}*/}
//         <BrowserRouter basename={"/"}>
//             <App />
//         </BrowserRouter>
//     </StrictMode>,
// )
export const createRoot = ViteReactSSG({ routes })