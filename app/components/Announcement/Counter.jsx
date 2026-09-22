export default function Counter({
    current,
    total
}){
    return (
        <div className="flex items-center gap-1 text-white font-medium">
            <span>
            {current}
            </span>
            <span>
                / 
            </span>
            <span>
                {total}     
            </span>
        </div>
    );

}