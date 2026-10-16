export default function Controls({ followers, rate, setFollowers, setRate }) {
    function handleFollow() {
        setFollowers(followers + 1);
    }
    
    function handleAddRate() {
        setRate(rate + 100);
    }
    
    function handleReset() {
        setFollowers(0);
        setRate(500);
    }
    return (
        <>
            <button
                className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
                onClick={handleFollow}
                >
                Follow
                </button>
                <button
                className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
                onClick={handleAddRate}
                >
                Add rate
                </button>
                <button
                className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
                onClick={handleReset}
                >
                Reset
            </button>
        </>
    )
}
