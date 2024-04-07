import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import {CardActionArea} from "@mui/material";
import TranPhuImage from '../assets/TranPhu.webp';
import SwinburneImage from '../assets/Swinburne.jpg';
import HCMUSImage from '../assets/VNU-HCMUS.jpg';
import UdemyImage from '../assets/Webdevbootcamp.jpg';

function EducationCard(props) {
    return (
        <div className={"education-box"}>
            <Card
                className={"card"}
                sx = {{backgroundColor: "#070F2B", borderRadius: "5%", border: 5, borderColor: "#00166C"}}
            >
                <CardActionArea>
                    <AspectRatio ratio="39/9" className={"card-image"} sx = {{borderRadius: "5%"}}>
                        <CardMedia
                            image={props.photo}
                            title={props.titl}
                        />
                    </AspectRatio>
                    <CardContent className={"card-content"}>
                        <Typography variant = "h3">{props.schoolName}</Typography>
                        <Typography variant = "h4">
                            {props.studyYear}
                        </Typography>
                        <Typography>
                            {props.achievement1}
                        </Typography>
                        <Typography>
                            {props.achievement2}

                        </Typography>
                        <Typography>
                            {props.achievement3}
                        </Typography>
                        <Typography>
                            {props.achievement4}
                        </Typography>
                        <Typography>
                            {props.achievement5}
                        </Typography>
                        <Typography>
                            {props.achievement6}
                        </Typography>
                        <Typography>
                            {props.achievement7}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )

}


function Education() {
    return (
        <section className="education" id="education" >
            <h2 className = "heading">My <span>Education</span></h2>
            <div>
                <EducationCard
                    photo={TranPhuImage}
                    titl={"TranPhu"}
                    schoolName="Tran Phu High School"
                    studyYear="2019-2021"
                    achievement1="Achieved Certificate of High School Completetion in 2021"
                    achievement2="High School Graduation Test Mark: 24/30"
                />
                <div className={"vl"}></div>
                <EducationCard
                    photo={HCMUSImage}
                    titl={"TranPhu"}
                    schoolName="VNUHCM-University of Science (HCMUS)"
                    studyYear="2021-2022"
                    achievement1="Ammitted to HCMUS with 917/1200 Mark of Competency Assessment Exam."
                    achievement2="Course Enrolled: Bachelor of Information Technology."
                    achievement3="Studied for 1 year before transfering to Australia."
                />
                <div className={"vl"}></div>
                <EducationCard
                    photo={SwinburneImage}
                    titl={"TranPhu"}
                    schoolName="Swinburne University of Science"
                    studyYear="2022-Now"
                    achievement1="Course Enrolled: Bachelor of Computer Science"
                    achievement2="Advanced Web Developemnt Mark: HD"
                    achievement3="Computing Technology Innovation Project Mark: D"
                    achievement4="3D Modelling for Objects and Environments Mark: HD"
                />
                <div className={"vl"}></div>
                <EducationCard
                    photo={UdemyImage}
                    titl={"TranPhu"}
                    schoolName="Angela Yu - The Complete 2024 Web Development Boot Camp"
                    studyYear="2024"
                    achievement1="Achieved Certificate of Completion in 2024"
                    achievement2="Studied NodeJS, ExpressJS, ReactJS and many more"
                />
            </div>

        </section>

    )
}

export default Education;
export {EducationCard}