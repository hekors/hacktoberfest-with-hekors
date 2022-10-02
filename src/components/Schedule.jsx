import React, { useRef } from "react";
import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Schedule({ scheduleTimeline }) {
  const scheduleTimelineResponse = useRef(scheduleTimeline);

  return (
    <section className="schedule-container" id="schedule">
      <h1 className="text-3xl font-semibold leading-snug text-center text-gray-700">
        Hacktoberfest Month Schedule
      </h1>
      <div className="grid items-stretch justify-start h-auto grid-rows-2 sm:grid-cols-2 gap-8 mx-auto mt-12 schedule-timeline-wrapper w-fit">
        {scheduleTimelineResponse.current?.map(
          (activityItem, activityIndex) => (
            <ActivityCard key={activityIndex} activity={activityItem} />
          )
        )}
        <div
          className="add-new-session-cta-card-container w-full sm:w-[360px] bg-white hover:bg-gray-100 border text-left border-gray-300 h-auto py-6 px-4
                    flex flex-row items-center justify-center"
        >
          <span className="text-center">
            <h1 className="text-lg font-semibold leading-snug text-gray-800">
              {"Want to take a session at HEKORS?"}
            </h1>
            <p className="mt-2 text-sm font-normal leading-snug text-gray-500">
              Then make sure you join our discord server and reach our to the
              community members or just say{" "}
              <span className="font-semibold text-blue-500">Hi!</span> in the{" "}
              <span className="font-semibold text-blue-500">
                #hacktoberfest-speakers
              </span>{" "}
              channel{" "}
              <p className="mt-2">{"We would love to have your onboard! 🚀"}</p>
            </p>
            <button
              className="px-3 py-2 mt-4 text-base text-white bg-indigo-500 rounded"
              onClick={() => window.open("https://discord.gg/muKCDkmGEX")}
            >
              {"Jump in to Discord ✨"}
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity }) {
  const [activityDetailsModal, setActivityDetailsModal] = useState(false);

  return (
    <React.Fragment>
      <button
        className="activity-item-button bg-white hover:bg-gray-100 border text-left 
        border-gray-300 w-full sm:w-[360px] h-auto py-4 px-2 sm:py-6 sm:px-4 flex flex-row items-start justify-start sm:justify-space-between"
        onClick={() => setActivityDetailsModal(true)}
      >
        <div className="activity-item-content-wrapper">
          <img
            src={activity?.coverImage}
            alt="session-banner"
            className="mb-3 rounded-md w-full sm:w-[420px]"
          />
          <h1 className="text-lg font-semibold leading-snug text-gray-800 activity-title">
            {activity?.activityTitle}
          </h1>
          <p className="text-sm font-normal text-gray-500 speaker-information">
            {"by, "}
            <span className="font-semibold text-indigo-500">
              {activity?.speaker?.name}
            </span>
            {" from "}
            <span className="font-semibold text-indigo-500">
              {activity?.speaker?.company?.companyName}
            </span>
          </p>
          <div
            className="calendar-schedule-details-wrapper mt-3 text-sm text-gray-500 font-normal
                        flex flex-row items-start justify-start gap-1.5"
          >
            {activity?.calendar?.date && activity?.calendar?.month ? (
              <span className="px-3 py-1 text-xs font-normal text-white bg-gray-800 border rounded-full calendar-schedule_date-wrapper">
                {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
              </span>
            ) : (
              <span className="calendar-schedule_date-not-added-message">
                {"Date not added"}
              </span>
            )}
            {activity?.calendar?.time?.hrs &&
            activity?.calendar?.time?.mins &&
            activity?.calendar?.time?.mrdn ? (
              <span className="px-3 py-1 text-xs font-normal text-white bg-gray-800 border rounded-full calendar-schedule_timings-wrapper">
                {`Time: ${activity?.calendar?.time?.hrs}:${
                  activity?.calendar?.time?.mins
                } ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
              </span>
            ) : (
              <span className="calendar-schedule_timings-not-added-message">
                {"Time not added"}
              </span>
            )}
          </div>
          <div className="mt-4" />
          <span
            className={`rounded-full px-3 py-1 text-sm font-normal border
                        ${
                          activity?.isDone
                            ? "bg-green-500 text-white border-transparent"
                            : "bg-white text-gray-500 border-gray-400"
                        }
                    `}
          >
            {activity?.isDone ? "Completed" : "Upcoming"}
          </span>
        </div>
      </button>
      <ReactModal
        isOpen={activityDetailsModal}
        onRequestClose={() => setActivityDetailsModal(false)}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.700)",
            filter: "blur(80%)",
          },
          content: {
            background: "white",
            borderColor: "transparent",
            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.360)",
            // width: "fit-content",
            width: "80%",
            height: "fit-content",
            maxHeight: "520px",
            paddingLeft: "4rem",
            paddingRight: "2rem",
            paddingTop: "1rem",
            paddingBottom: "3rem",
            // centering content (horizontally)
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "2rem",
          },  
        }}
      >
        <div className="mb-6 close-button-layer">
          <button
            className="text-sm font-normal text-gray-500 close-button hover:text-gray-600"
            onClick={() => setActivityDetailsModal(false)}
          >
            {"Close"}
          </button>
        </div>
        <div className="flex flex-row items-start justify-start gap-12 activity-item-modal-innerContent-container">
          <div className="activity-item-content-wrapper">
            <img
              src={activity?.coverImage}
              alt="session-banner"
              className="mb-3 rounded-md w-full sm:w-[560px]"
            />
            <h1 className="text-lg font-semibold leading-snug text-gray-800 activity-title">
              {activity?.activityTitle}
            </h1>
            <p className="text-sm font-normal text-gray-500 speaker-information">
              {"by, "}
              <span className="font-semibold text-indigo-500">
                {activity?.speaker?.name}
              </span>
              {" from "}
              <span className="font-semibold text-indigo-500">
                {activity?.speaker?.company?.companyName}
              </span>
            </p>
            <div className="flex flex-row items-center justify-start gap-2 mt-3 text-sm font-normal text-gray-500 calendar-schedule-details-wrapper">
              {activity?.calendar?.date && activity?.calendar?.month ? (
                <span className="px-3 py-1 text-xs font-normal text-white bg-gray-800 border rounded-full calendar-schedule_date-wrapper">
                  {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
                </span>
              ) : (
                <span className="calendar-schedule_date-not-added-message">
                  {"Date not added"}
                </span>
              )}
              {activity?.calendar?.time?.hrs &&
              activity?.calendar?.time?.mins &&
              activity?.calendar?.time?.mrdn ? (
                <span className="px-3 py-1 text-xs font-normal text-white bg-gray-800 border rounded-full calendar-schedule_timings-wrapper">
                  {`Time: ${activity?.calendar?.time?.hrs}:${
                    activity?.calendar?.time?.mins
                  } ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
                </span>
              ) : (
                <span className="calendar-schedule_timings-not-added-message">
                  {"Time not added"}
                </span>
              )}
            </div>
            <div className="mt-4" />
            <span
              className={`rounded-full px-3 py-1 text-sm font-normal border
                            ${
                              activity?.isDone
                                ? "bg-green-500 text-white border-transparent"
                                : "bg-white text-gray-500 border-gray-400"
                            }
                        `}
            >
              {activity?.isDone ? "Completed" : "Upcoming"}
            </span>
          </div>
          <div className="pr-12 activity-item-more-details-content-wrapper">
            <h1 className="text-2xl font-semibold leading-snug text-gray-800">
              Session Details
            </h1>
            <span className="flex flex-col items-start justify-start gap-2 mt-4 venue-details-wrapper">
              <span className="text-xs font-normal text-gray-400">
                {"Venue"}
              </span>
              <p
                className={`rounded-full px-3 py-1 text-xs font-normal border w-fit
                                ${
                                  activity?.venue?.isOnline
                                    ? "bg-green-500 text-white border-transparent"
                                    : "bg-white text-gray-500 border-gray-400"
                                }
                            `}
              >
                {activity?.venue?.isOnline ? "Online" : "Offline"}
              </p>
            </span>
            <div className="mt-4 session-description-content-wrapper">
              <h1 className="text-xs leading-snug text-gray-400">
                {"Session Description"}
              </h1>
              {activity?.description ? (
                <p className="text-sm font-normal text-gray-600 description-text">
                  {activity?.description}
                </p>
              ) : (
                <span className="text-sm text-gray-300 cursor-default select-none description-not-added-text">
                  No description found
                </span>
              )}
              {activity?.venue?.isOnline && activity?.venue?.meetingLink ? (
                <div className="mt-2 joining-meeting-link-wrapper">
                  <span className="text-sm font-normal text-gray-600">
                    {"Join here: "}
                  </span>
                  <a
                    href={activity?.venue?.meetingLink}
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm text-blue-500"
                  >
                    {activity?.venue?.meetingLink}
                  </a>
                </div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
              {activity?.speaker && activity?.speaker?.name ? (
                <div className="flex flex-col items-start justify-start gap-2 mt-4 speaker-details-content-wrapper w-fit h-fit">
                  <h1 className="text-xs leading-snug text-gray-400">
                    {"Speaker Details"}
                  </h1>
                  <span
                    className={
                      "rounded-full px-3 py-1 w-fit text-sm font-normal border bg-white text-gray-500 border-gray-400"
                    }
                  >
                    {activity?.speaker?.name}
                  </span>
                  {activity?.speaker?.github ? (
                    <a
                      href={`https://github.com/${activity?.speaker?.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-500 w-fit"
                    >
                      {"GitHub at " + activity?.speaker?.github}
                    </a>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                  {activity?.speaker?.website ? (
                    <a
                      href={activity?.speaker?.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-500 w-fit"
                    >
                      {"Personal Website"}
                    </a>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                  {activity?.speaker?.company &&
                  activity?.speaker?.company?.companyName &&
                  activity?.speaker?.company?.companyWebsite ? (
                    <a
                      href={activity?.speaker?.company?.companyWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-500 w-fit"
                    >
                      {"Working at " + activity?.speaker?.company?.companyName}
                    </a>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
            {activity?.venue?.meetingLink ? (
              <button
                className="px-4 py-2 mt-4 font-semibold text-white bg-indigo-500 rounded-md add-to-calendar-button"
                onClick={() => window.open(activity?.venue?.meetingLink)}
              >
                {"Join the session"}
              </button>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </div>
        </div>
      </ReactModal>
    </React.Fragment>
  );
}

{
  /* <img src={activity?.coverImage} alt="session-banner" 
                                className="mb-3 rounded-md" />
                            <h1 className="text-2xl font-semibold leading-snug text-gray-800 activity-title">
                                {activity?.activityTitle}
                            </h1>
                            <p className="text-sm font-normal text-gray-500 speaker-information">
                                {"by, "}
                                <span className="font-semibold text-indigo-500">{activity?.speaker?.name}</span> 
                                {" from "}
                                <span className="font-semibold text-indigo-500">{activity?.speaker?.company}</span>
                            </p>
                            <div className="flex flex-col items-start justify-start gap-1 mt-3 text-sm font-normal text-gray-500 calendar-schedule-details-wrapper ">
                                <span className="calendar-schedule_date-wrapper">
                                    {`on, ${activity?.calendar?.date} ${activity?.calendar?.month} ${activity?.calendar?.year}`}
                                </span>
                                 <span className="calendar-schedule_timings-wrapper">
                                    {`Time: ${activity?.calendar?.time?.hrs} ${activity?.calendar?.time?.mins} ${activity?.calendar?.time?.mrdn.toUpperCase()}`}
                                </span>
                            </div> */
}
