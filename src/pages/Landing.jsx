
import Schedule from "../components/Schedule";
import ScheduleTimelineData from '../dataSource/schedule-timeline.json';
import HacktoberfestHekorsBanner from '../lib/hacktoberfest-hekors-banner.png';

export default function Landing() {
    return (
        <section className="landing-page-container">
            <div className="hero-section mt-36">
                <h1 className="leading-snug text-5xl font-bold text-center w-[680px] mx-auto">
                    {"Advocating Open Source this October with Hacktoberfest"}
                </h1>
                <p className="leading-snug text-sm text-gray-400 text-center mx-auto font-normal mt-4">
                    {"We this year, are actively advocating open source & spreading open source knowledge"}
                </p>
                <div className="cta-buttons-layer-container flex flex-row items-center jusitfy-center font-mono gap-3 w-fit mx-auto h-auto mt-6">
                    <button className="px-4 py-3 rounded bg-indigo-500 text-base text-white"
                        onClick={() => window.open('https://discord.gg/muKCDkmGEX')}
                    >
                        {"Join Discord"}
                    </button>
                    <button className="px-4 py-3 rounded bg-white text-base border text-gray-800 border-gray-200" 
                    >
                        {"Schedule"}
                    </button>
                    <button className="px-4 py-3 rounded bg-gray-800 text-base text-white"  
                    >
                        {"Sessions & Streams"}
                    </button>
                </div>
            </div>
            {/* <img src={HacktoberfestHekorsBanner} alt="hacktoberfest-hekors-banner"
                className="mx-auto mt-32" /> */}
            <div className="mt-52">
                <Schedule scheduleTimeline={ScheduleTimelineData} />
            </div>
        </section>
    )
}