import React, { useRef } from "react"
import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

export default function Schedule({scheduleTimeline}) {
    const scheduleTimelineResponse = useRef(scheduleTimeline);
    const [activityDetailsModal, setActivityDetailsModal] = useState(false);

    return (
        <section className="schedule-container">
            <h1 className="leading-snug text-3xl text-gray-700 font-semibold text-center">Hacktoberfest Month Schedule</h1>
            <div className="schedule-timeline-wrapper mt-12 w-fit h-auto grid grid-cols-2 gap-8 mx-auto items-start justify-start">
                {scheduleTimelineResponse.current?.map((activity, activtyIndex) => (
                    <React.Fragment key={activtyIndex}>
                        <button className="activity-item-button bg-white border text-left border-gray-300 w-[420px] h-auto py-6 px-4
                            flex flex-row items-start justify-center"
                                onClick={() => setActivityDetailsModal(true)}
                            >
                            <div className="activity-item-content-wrapper">
                                <img src={activity?.coverImage} alt="session-banner" 
                                    className="mb-3 rounded-md" />
                                <h1 className="activity-title leading-snug text-lg text-gray-800 font-semibold">
                                    {activity?.activityTitle}
                                </h1>
                                <p className="speaker-information text-sm font-normal text-gray-500">
                                    {"by, "}
                                    <span className="font-semibold text-indigo-500">{activity?.speaker?.name}</span> 
                                    {" from "}
                                    <span className="font-semibold text-indigo-500">{activity?.speaker?.company?.companyName}</span>
                                </p>
                                <div className="calendar-schedule-details-wrapper mt-3 text-sm text-gray-500 font-normal
                                    flex flex-row items-start justify-start gap-1.5">
                                    {activity?.calendar?.date && activity?.calendar?.month
                                        ? <span className="calendar-schedule_date-wrapper rounded-full px-3 py-1 text-xs font-normal border bg-gray-800 text-white">
                                            {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
                                        </span>
                                        : <span className="calendar-schedule_date-not-added-message">
                                            {"Date not added"}
                                        </span>
                                    }
                                    {activity?.calendar?.time?.hrs && activity?.calendar?.time?.mins && activity?.calendar?.time?.mrdn
                                        ? <span className="calendar-schedule_timings-wrapper rounded-full px-3 py-1 text-xs font-normal border bg-gray-800 text-white">
                                            {`Time: ${activity?.calendar?.time?.hrs}:${activity?.calendar?.time?.mins} ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
                                        </span>
                                        : <span className="calendar-schedule_timings-not-added-message">
                                            {"Time not added"}
                                        </span>
                                    }
                                </div>
                                <div className="mt-4" />
                                <span className={`rounded-full px-3 py-1 text-sm font-normal border
                                    ${activity?.isDone ? 'bg-green-500 text-white border-transparent' : 'bg-white text-gray-500 border-gray-400'}
                                `}>
                                    {activity?.isDone ? "Completed" : "Upcoming"}
                                </span>
                            </div>
                        </button>
                        <ReactModal
                            isOpen={activityDetailsModal}
                            onRequestClose={() => setActivityDetailsModal(false)}
                            style={{
                                overlay: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(0, 0, 0, 0.700)',
                                    filter: 'blur(80%)'
                                },
                                content: {
                                    background: 'white',
                                    borderColor: 'transparent',
                                    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.360)',
                                    width: 'fit-content',
                                    height: "fit-content",
                                    maxHeight: '520px',
                                    paddingLeft: '4rem',
                                    paddingRight: '2rem',
                                    paddingTop: '1rem',
                                    paddingBottom: '3rem',
                                    // centering content (horizontally)
                                    marginRight: 'auto',
                                    marginLeft: 'auto',
                                    marginTop: '4rem'
                                }
                            }}
                        >
                            <div className="close-button-layer mb-6">
                                <button className="close-button text-sm text-gray-500 font-normal hover:text-gray-600"
                                    onClick={() => setActivityDetailsModal(false)}
                                >{"Close"}</button>
                            </div>
                        <div className="activity-item-modal-innerContent-container flex flex-row items-start justify-start gap-12">
                            <div className="activity-item-content-wrapper">
                                    <img src={activity?.coverImage} alt="session-banner" 
                                        className="mb-3 rounded-md w-[560px]" />
                                    <h1 className="activity-title leading-snug text-lg text-gray-800 font-semibold">
                                        {activity?.activityTitle}
                                    </h1>
                                    <p className="speaker-information text-sm font-normal text-gray-500">
                                        {"by, "}
                                        <span className="font-semibold text-indigo-500">{activity?.speaker?.name}</span> 
                                        {" from "}
                                        <span className="font-semibold text-indigo-500">{activity?.speaker?.company?.companyName}</span>
                                    </p>
                                    <div className="calendar-schedule-details-wrapper mt-3 text-sm text-gray-500 font-normal
                                        flex flex-row items-center justify-start gap-2">
                                        {activity?.calendar?.date && activity?.calendar?.month
                                            ? <span className="calendar-schedule_date-wrapper rounded-full px-3 py-1 text-xs font-normal border bg-gray-800 text-white">
                                                {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
                                            </span>
                                            : <span className="calendar-schedule_date-not-added-message">
                                                {"Date not added"}
                                            </span>
                                        }
                                        {activity?.calendar?.time?.hrs && activity?.calendar?.time?.mins && activity?.calendar?.time?.mrdn
                                            ? <span className="calendar-schedule_timings-wrapper rounded-full px-3 py-1 text-xs font-normal border bg-gray-800 text-white">
                                                {`Time: ${activity?.calendar?.time?.hrs}:${activity?.calendar?.time?.mins} ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
                                            </span>
                                            : <span className="calendar-schedule_timings-not-added-message">
                                                {"Time not added"}
                                            </span>
                                        }
                                    </div>
                                    <div className="mt-4" />
                                    <span className={`rounded-full px-3 py-1 text-sm font-normal border
                                        ${activity?.isDone ? 'bg-green-500 text-white border-transparent' : 'bg-white text-gray-500 border-gray-400'}
                                    `}>
                                        {activity?.isDone ? "Completed" : "Upcoming"}
                                    </span>
                                </div>
                                <div className="activity-item-more-details-content-wrapper pr-12">
                                    <h1 className="leading-snug text-2xl text-gray-800 font-semibold">Session Details</h1>
                                    <span className="venue-details-wrapper flex flex-col items-start justify-start gap-2 mt-4">
                                        <span className="text-xs text-gray-400 font-normal">{"Venue"}</span>
                                        <p className={`rounded-full px-3 py-1 text-xs font-normal border w-fit
                                            ${activity?.venue?.isOnline ? 'bg-green-500 text-white border-transparent' : 'bg-white text-gray-500 border-gray-400'}
                                        `}>
                                            {activity?.venue?.isOnline ? "Online" : "Offline"}
                                        </p>
                                    </span>
                                    <div className="session-description-content-wrapper mt-4">
                                        <h1 className="leading-snug text-xs text-gray-400">{"Session Description"}</h1>
                                        {activity?.description
                                            ? <p className="description-text text-sm text-gray-600 font-normal">{activity?.description}</p>
                                            : <span className="description-not-added-text text-sm text-gray-300 select-none cursor-default">No description found</span>
                                        }
                                        {activity?.venue?.isOnline && activity?.venue?.meetingLink
                                            ? <div className="joining-meeting-link-wrapper mt-2">
                                                <span className="text-gray-600 text-sm font-normal">{"Join here: "}</span>
                                                <a href={activity?.venue?.meetingLink} rel="noreferrer" target="_blank"
                                                    className="text-sm text-blue-500"
                                                >
                                                    {activity?.venue?.meetingLink}
                                                </a>
                                            </div>
                                            : <React.Fragment></React.Fragment>
                                        }
                                        {activity?.speaker && activity?.speaker?.name
                                            ? <div className="speaker-details-content-wrapper mt-4 flex flex-col items-start gap-2 justify-start w-fit h-fit">
                                                <h1 className="leading-snug text-xs text-gray-400">{"Speaker Details"}</h1>
                                                <span className={'rounded-full px-3 py-1 w-fit text-sm font-normal border bg-white text-gray-500 border-gray-400'}>
                                                    {activity?.speaker?.name}
                                                </span>
                                                {activity?.speaker?.github
                                                    ? <a href={`https://github.com/${activity?.speaker?.github}`} target="_blank" rel="noreferrer" className="w-fit text-sm text-blue-500">
                                                        {"GitHub at " + activity?.speaker?.github}
                                                    </a>
                                                    : <React.Fragment></React.Fragment>
                                                }
                                                {activity?.speaker?.website
                                                    ? <a href={activity?.speaker?.website} target="_blank" rel="noreferrer" className="w-fit text-sm text-blue-500">
                                                        {"Personal Website"}
                                                    </a>
                                                    : <React.Fragment></React.Fragment>
                                                }
                                                {activity?.speaker?.company && activity?.speaker?.company?.companyName && activity?.speaker?.company?.companyWebsite
                                                        ? <a href={activity?.speaker?.company?.companyWebsite} target="_blank" rel="noreferrer"
                                                            className="w-fit text-sm text-blue-500">
                                                                {"Working at " + activity?.speaker?.company?.companyName}
                                                        </a>
                                                    : <React.Fragment></React.Fragment>
                                                }
                                            </div>
                                            : <React.Fragment></React.Fragment>
                                        }
                                    </div>
                                    {activity?.calendar?.calendarLink
                                        ? <button className="add-to-calendar-button mt-4 px-4 py-2 rounded-md bg-indigo-500 text-white font-semibold"
                                            onClick={() => window.open(activity?.calendar?.calendarLink)}>
                                            {"Add to Calendar"}
                                        </button>
                                        : <React.Fragment></React.Fragment>
                                    }
                                </div>
                            </div>
                        </ReactModal>
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