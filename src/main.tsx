import { ViteReactSSG } from 'vite-react-ssg'
import {routes} from "./App.tsx";

export const createRoot = ViteReactSSG({ routes })