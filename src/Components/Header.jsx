import Fire from "../assets/urify.svg"
import star from "../assets/star.svg"

const Header = () => {
    return (
        <div>
            <header className="flex justify-between items-center py-4 md:ml-28 lg:mr-28 flex-wrap">
                <div className="flex space-x-10 max-sm:space-x-4">
                    <img src={Fire} className="h-10 max-sm:h-9"/>
                    <nav className="flex space-x-9 max-sm:space-x-7 text-xl max-sm:text-base mt-2">
                        <a href="#" className="text-red-600 font-bold">Home</a>
                        <a href="#" className="text-gray-600 font-bold hover:text-red-600">About Us</a>
                        <a href="#" className="text-gray-600 font-bold hover:text-red-600">Pricing</a>
                        <a href="#" className="text-gray-600 font-bold hover:text-red-600">Features</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080" target="_blank" rel="noopener noreferrer">
                        <button className="bg-black text-white px-12 py-4 rounded-sm border border-black hover:bg-white hover:text-black hover:border-black hidden xl:block"> Download </button>
                    </a>
                    <img src={star} className="w-8 h-8 hidden lg:block" />
                </div>
            </header>
        </div>
    )
}

export default Header;
