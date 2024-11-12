import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className="pt-[200px] pb-[200px] flex items-center justify-center flex-col gap-12 text-2xl">
            Coming soon

            <Link to={"/"} className="bg-blue-500 p-2 rounded-lg">Shop now!</Link>
        </div>
    )
}

export default Admin
