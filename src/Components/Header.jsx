import Fire from "../assets/urify.svg"
import star from "../assets/star.svg"

const Header = () => {
    return (
        <div>
            <header className="flex justify-between items-center px-8 py-4 mr-28">
                <div className="flex items-center space-x-2 text-4xl font-bold ml-28">
                    <a href=""><img src={Fire} /></a>
                    <a href="">uifry</a>
                </div>
                <nav className="flex space-x-12 text-xl">
                    <a href="" className="text-red-600 font-bold">Home</a>
                    <a href="" className="text-gray-600 font-bold hover:text-red-600">About Us</a>
                    <a href="" className="text-gray-600 font-bold hover:text-red-600">Pricing</a>
                    <a href="" className="text-gray-600 font-bold hover:text-red-600">Features</a>
                </nav>
                <a href="https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080" target="_blank" rel="noopener noreferrer" >
                    <button className="bg-black text-white px-12 py-4 rounded-sm ml-[686px] border border-black hover:bg-white hover:text-black hover:border-black"> Download </button>
                </a>
                <img src={star} />
            </header>
        </div>
    )
}


export default Header;