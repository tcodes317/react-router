import {Link} from "react-router-dom";

function Header(){
    return(
        <>
            <header>
                <div className="flex items-center justify-between">
                    <div className="bg-orange-500">
                        Images
                    </div>
                    <div>
                        <nav>
                            <Link to="/home">Home</Link>
                            <Link to="/findjob">FindJob</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;