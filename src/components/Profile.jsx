import Bio from "./Bio";
import StatCard from "./StatCard";
import { useState } from "react";
import Hire from "./Hire";
import Controls from "./Controls";

export default function Profile() {
    const [followers, setFollowers] = useState(0);
    const [rate, setRate] = useState(500);

    return (
        <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
            <div>
                <Bio name="RAY ART S. MASBATE" username="rayartmasbate" />
                <div className="mt-6 flex gap-6">
                    <StatCard value={followers} label="Followers" />
                    <StatCard value={rate} label="PHP per hour" />
                </div>
            </div>
        
            <div className="flex gap-4">
              <Controls followers={followers} rate={rate} setFollowers={setFollowers} setRate={setRate} />
            </div>
            <Hire rate={rate} />
        </div>
    )
}