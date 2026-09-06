import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100">

        <div  className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <div className="flex items-center">
                <Logo />
            </div>

            <div className="flex items-center">
                <NavLinks />
            </div>
            {/* for the cart and user buttons */}
            <div className="flex items-center gap-4">
                <SearchButton />
                <CartButton />
                <UserButton />
            </div>

        </div>
        </nav>
    );
}