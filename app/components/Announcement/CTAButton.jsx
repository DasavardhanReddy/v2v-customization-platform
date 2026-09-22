import Link from "next/link";

export default function CTAButton({

    text,
    link

}){
    return (

        <Link href={link} className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-orange-500
            px-8
            py-4
            text-lg
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:bg-orange-600
            ">
        {text}
        </Link>
    );  
}