import {EducationCard} from "./Education.jsx";
import USECImage from '../assets/USEC.jpg';
import VISSImage from '../assets/VISS.jpg';
import ProjectImage from '../assets/project.jpg';


function WorkExperience () {
    return (
        <section className="work-xp">
            <h2 className = "heading">Work <span>Experience</span></h2>
            <div>
                <EducationCard
                    photo={USECImage}
                    schoolName={"University of Science Esports Club"}
                    studyYear={"2021-2022"}
                    achievement1={"Prepare paperwork for upcoming tournaments"}
                    achievement2={"Inspecting and setting up places for hosting events."}
                    achievement3={"Observing multiple matches to ensure that there is no cheating while playing."}
                    achievement4={"Notable Event Hosted: HCMUS XI, HCMUS XII"}
                />
                <div className={"vl"}></div>
                <EducationCard
                    photo={VISSImage}
                    schoolName={"Vietnamese International Students at Swinburne"}
                    studyYear={"2021-2022"}
                    achievement1={"Draft proposal plans for upcoming events."}
                    achievement2={"Create new and creative ideas to attract more people."}
                    achievement3={"Perform risk management tasks."}
                    achievement4={"Communicate with other people from other sectors to build stronger relationships."}
                    achievement5={"Won Swinburne People Choice´s Award for clubs."}
                    achievement6={"Notable events hosted: Mid-Autumn Festival, Welcome Party, Beach Party, Sports Event, Unitalk."}
                />
                <div className={"vl"}></div>
                <EducationCard
                    photo={ProjectImage}
                    schoolName={"Personal Project"}
                    studyYear={"2024"}
                    achievement1={"Personal Porfofio Website."}
                />
            </div>
        </section>
    )
}

export default WorkExperience;