
import { useState } from "react";
import ReactModal from "react-modal";
import Schedule from "../components/Schedule";
import ScheduleTimelineData from "../dataSource/schedule-timeline.json";
import HacktoberfestHekorsBanner from "../lib/hacktoberfest-hekors-banner.png";
import { Helmet } from "react-helmet";

ReactModal.setAppElement('#root');

export default function Landing() {
    const [rsvpSessionPopup, setRSVPSessionPopup] = useState(false);
    return (
        <section className="landing-page-container">
            <div className="hero-section mt-36">
              <h1 className="leading-snug text-3xl sm:text-5xl font-bold text-center w-full sm:w-[680px] mx-auto">
                    {"Advocating Open Source this October with Hacktoberfest"}
                </h1>
                <p className="mx-2 mt-4 text-sm font-normal leading-snug text-center text-gray-400">
                    {"We this year, are actively advocating open source & spreading open source knowledge"}
                </p>
                <div className="flex flex-col sm:flex-row items-center h-auto gap-3 mx-auto mt-6 font-mono cta-buttons-layer-container jusitfy-center w-fit">
                  <button className="px-4 py-3 rounded bg-indigo-500 text-base text-white"
                      onClick={() => window.open('https://discord.gg/muKCDkmGEX')}
                  >
                      {"Join Discord"}
                  </button>
                  <a href="#schedule">
                      <button className="px-4 py-3 text-base text-gray-800 bg-white border border-gray-200 rounded">
                          {"Schedule"}
                      </button>
                  </a>
                  <button className="px-4 py-3 rounded bg-gray-800 text-base text-white"  
                  >
                      {"Sessions & Streams"}
                  </button>
                </div>
            </div>
            <div className="rsvp-upcoming-session w-full md:w-[500px] mt-16 h-auto mx-auto px-4 py-6 rounded-md bg-indigo-100 text-center flex flex-col items-center justify-center gap-3">
                <h1 className="leading-snug text-lg text-gray-800 font-semibold">RSVP for the upcoming session today</h1>
                <button className="px-4 py-3 rounded bg-indigo-500 text-base text-white" 
                    onClick={() => setRSVPSessionPopup(true)}
                >
                    {"RSVP here"}
                </button>
            </div>
            {/* <img src={HacktoberfestHekorsBanner} alt="hacktoberfest-hekors-banner"
                className="mx-auto mt-32" /> */}
            <div className="mt-52">
                <Schedule scheduleTimeline={ScheduleTimelineData} />
            </div>
            <ReactModal isOpen={rsvpSessionPopup}
                onRequestClose={() => setRSVPSessionPopup(false)}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.700)',
                        filter: 'blur(80%)',
                    },
                    content: {
                        background: 'white',
                        borderColor: 'transparent',
                        boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.360)',
                        width: 'fit-content',
                        height: "fit-content",
                        maxHeight: '520px',
                        paddingTop: '1rem',
                        paddingBottom: '3rem',
                        // centering content (horizontally)
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '1rem'
                    }
                }}
            >
                <div className="close-button-layer mb-6 mx-2">
                    <button className="close-button text-sm text-gray-500 font-normal hover:text-gray-600"
                        onClick={() => setRSVPSessionPopup(false)}
                    >{"Close"}</button>
                </div>
                <div className="rsvp-content-wrapper flex flex-col items-center justify-center mx-2 w-full md:w-[500px]">
                    <h1 className="leading-snug text-sm sm:text-lg w-full text-gray-800 font-semibold">RSVP for the upcoming session today</h1>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdH6uyKKN4kpuvvXtkGAhOFgjFZgXfsykAa4pncthgECqmc0Q/viewform?embedded=true" width="100% !important" height="1315" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </ReactModal>
        </section>
    )
}
