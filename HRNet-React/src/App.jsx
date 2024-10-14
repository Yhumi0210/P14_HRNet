import { Outlet } from "react-router-dom"
import Header from "./components/common/Header.jsx"

/**
 * App component renders the application's main component.
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}