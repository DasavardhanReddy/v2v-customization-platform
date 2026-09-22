import Image from "next/image";

export default function OfferImage({ image, title }){

    return (
    
        <Image 
        src={image}
        alt={title}
        width={1200}
        height={600}
        className="
                w-full
                h-full
                 object-cover"                
         />
);
}