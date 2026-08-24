import Link from "next/link";

const navLinks = [
    {
        name:"Home",
        href:"/",
    }, 
    {
        name:"Browse Parts",
        href:" /browse",
    },
    {
        name:"Vehicle",
        href: "/vehicle",
    },
    {
        name:" Workshop",
        href: " /workshop",
    },
    {
        name:"About",
        href:"/about",
    },
    {
        name:"Contact",
        href:"/contact"
    },

];

export default function NavLinks() {
    return (
        <>
            {
                navLinks.map(function(link){

                return(
                    <Link
                    key={link.href}
                    href={link.href}
                    >
                        {link.name}
                    </Link>
                );
            }
                )
                
            }
        </>
    );
}