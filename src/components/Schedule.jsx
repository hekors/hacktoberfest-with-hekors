import React, { useRef } from "react"

export default function Schedule({scheduleTimeline}) {
    const scheduleTimelineResponse = useRef(scheduleTimeline);
    return (
        <section className="schedule-container">
            <h1 className="leading-snug text-3xl text-gray-700 font-semibold text-center">Hacktoberfest Month Schedule</h1>
            <div className="schedule-timeline-wrapper mt-12 w-fit h-auto grid grid-cols-2 gap-8 mx-auto items-start justify-start">
                {scheduleTimelineResponse.current?.map((activity, activtyIndex) => (
                    <React.Fragment key={activtyIndex}>
                        <button className="activity-item-button bg-white border text-left border-gray-300 w-[420px] h-auto py-6 px-4
                            flex flex-row items-start justify-center
                        ">
                            <div className="activity-item-content-wrapper">
                                <h1 className="activity-title leading-snug text-lg text-gray-800 font-semibold">
                                    {activity?.activityTitle}
                                </h1>
                                <p className="speaker-information text-sm font-normal text-gray-500">
                                    {"by, "}
                                    <span className="font-semibold text-indigo-500">{activity?.speaker?.name}</span> 
                                    {" from "}
                                    <span className="font-semibold text-indigo-500">{activity?.speaker?.company}</span>
                                </p>
                                <div className="calendar-schedule-details-wrapper mt-3 text-sm text-gray-500 font-normal
                                    flex flex-col items-start justify-start gap-1">
                                <span className="calendar-schedule_date-wrapper">
                                    {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
                                </span>
                                <span className="calendar-schedule_timings-wrapper">
                                    {`Time: ${activity?.calendar?.time?.hrs}:${activity?.calendar?.time?.mins} ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
                                </span>
                            </div>
                            </div>
                        </button>
                        
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}














{/* <img src={activity?.coverImage} alt="session-banner" 
                                className="mb-3 rounded-md" />
                            <h1 className="activity-title leading-snug text-2xl text-gray-800 font-semibold">
                                {activity?.activityTitle}
                            </h1>
                            <p className="speaker-information text-sm font-normal text-gray-500">
                                {"by, "}
                                <span className="font-semibold text-indigo-500">{activity?.speaker?.name}</span> 
                                {" from "}
                                <span className="font-semibold text-indigo-500">{activity?.speaker?.company}</span>
                            </p>
                            <div className="calendar-schedule-details-wrapper mt-3 text-sm text-gray-500 font-normal
                                flex flex-col items-start justify-start gap-1
                            ">
                                <span className="calendar-schedule_date-wrapper">
                                    {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
                                </span>
                                <span className="calendar-schedule_timings-wrapper">
                                    {`Time: ${activity?.calendar?.time?.hrs} ${activity?.calendar?.time?.mins} ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
                                </span>
                            </div> */}