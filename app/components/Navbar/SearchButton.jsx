import { Search } from "lucide-react";

export default function SearchButton() {
    return (
        <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
            <Search size={22} />
        </button>
    );
}