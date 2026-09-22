import Counter from "./Counter";
import OfferContent from "./OfferContent";
import OfferImage from "./OfferImage";

export default function AnnouncementItem({
    offer,
    current,
    total,
    isVisible,
}) {
    return (
        <div
            className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-black
        shadow-2xl
        transition-all
        duration-500
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"}
    `}
        >
            {/* Background Image */}
            <OfferImage
                image={offer.image}
                title={offer.title}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                        {offer.badge}
                    </span>

                    <Counter
                        current={current}
                        total={total}
                    />

                </div>

                {/* Bottom Content */}
                <OfferContent
                    title={offer.title}
                    subtitle={offer.subtitle}
                    discount={offer.discount}
                    buttonText={offer.buttonText}
                    buttonLink={offer.buttonLink}
                />

            </div>

        </div>
    );
}