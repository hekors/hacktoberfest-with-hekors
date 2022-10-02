import React from "react";
import Schedule from "../components/Schedule";
import ScheduleTimelineData from "../dataSource/schedule-timeline.json";
import HacktoberfestHekorsBanner from "../lib/hacktoberfest-hekors-banner.png";
import { Helmet } from "react-helmet";

export default function Landing() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hacktoberfest with Hekors</title>
        <meta
          name="description"
          content="Advocating Open Source this October with Hacktoberfest"
        />
      </Helmet>
      <section className="landing-page-container">
        <div className="hero-section mt-36">
          <h1 className="leading-snug text-3xl sm:text-5xl font-bold text-center w-full sm:w-[680px] mx-auto">
            {"Advocating Open Source this October with Hacktoberfest"}
          </h1>
          <p className="mx-2 mt-4 text-sm font-normal leading-snug text-center text-gray-400">
            {
              "We this year, are actively advocating open source & spreading open source knowledge"
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center h-auto gap-3 mx-auto mt-6 font-mono cta-buttons-layer-container jusitfy-center w-fit">
            <button
              className="px-4 py-3 text-base text-white bg-indigo-500 rounded"
              onClick={() => window.open("https://discord.gg/muKCDkmGEX")}
            >
              {"Join Discord"}
            </button>
            <a href="#schedule">
              <button className="px-4 py-3 text-base text-gray-800 bg-white border border-gray-200 rounded">
                {"Schedule"}
              </button>
            </a>
            <button className="px-4 py-3 text-base text-white bg-gray-800 rounded">
              {"Sessions & Streams"}
            </button>
          </div>
        </div>
        {/* <img src={HacktoberfestHekorsBanner} alt="hacktoberfest-hekors-banner"
                className="mx-auto mt-32" /> */}
        <div className=" mt-10 sm:mt-52">
          <Schedule scheduleTimeline={ScheduleTimelineData} />
        </div>
      </section>
    </React.Fragment>
  );
}
