import CTAButton from "./CTAButton";


export default function OfferContent({
    title,
    subtitle,
    discount,
    buttonText,
    buttonLink
}){
        return (
            <div className="max-w-xl space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight text-white">
                    {title}
                </h2>
                <p className="text-lg text-gray-200">
                {subtitle}
                </p>
                <p className="text-2xl font-bold text-orange-400">
                {discount}
                </p>
                <div className="inline-flex w-fit items-center rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                         ⭐ Free Installation Included
                </div>
                <CTAButton
                text={buttonText}
                link={buttonLink}
            />
            </div>
        );
}