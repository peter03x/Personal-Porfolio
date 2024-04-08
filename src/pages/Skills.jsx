import React from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';;
import CSSImage from '../assets/CSS-Logo.png';
import ReactImage from '../assets/React-Logo.png';
import NodeImage from '../assets/node-js.png';
import CppImage from '../assets/cpp.png';
import ActiveListeningImage from '../assets/active-listening.png';
import CreativeImage from '../assets/creativity.png';
import TeamworkImage from '../assets/teamwork.png';
import FlexibityImage from '../assets/flexibility.png';


function SkillCard(props) {
    return (
        <div className={"skill-box"}>
            <Card
                variant="outlined"
                size="sm"
                orientation = "horizontal"
                sx={{ gap: 2, minWidth: 300, backgroundColor: "#070F2B", borderRadius: "5%", border: 5, borderColor: "#00166C"}}
            >
                <CardOverflow>
                    <AspectRatio
                        ratio= "1"
                        sx={{
                            borderRadius: "50%",
                            width:90,
                            backgroundColor: "#00166c"
                        }}
                    >
                        <img
                            src={props.photo}
                            srcSet={props.photo}
                            alt=""
                            style={{}}
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent className = {"card-content"} sx={{whiteSpace: "pre-wrap"}}>
                        <Typography variant={""}>{props.skilltitle}</Typography>
                        <Typography level="body-sm">{props.skill1}</Typography>
                </CardContent>
            </Card>
        </div>
    )

}

function Skills() {
    return (
        <section className="skill">
            <h2 className="heading">Key <span>Skills</span></h2>
            <div className="skillrow">
                <div className="skillcolumn">
                    <SkillCard
                        photo={CSSImage}
                        skilltitle={"General Web Development"}
                        skill1={"HTML, CSS"}
                    />
                    <SkillCard
                        photo={ReactImage}
                        skilltitle={"Front-end Framework"}
                        skill1={"ReactJS, jQuery"}
                    />
                    <SkillCard
                        photo={NodeImage}
                        skilltitle={"Back-end Framework"}
                        skill1={"NodeJS, ExpressJS"}
                    />
                    <SkillCard
                        photo={CppImage}
                        skilltitle={"Other Programming Languages"}
                        skill1={"C++, C#"}
                    />
                </div>
                <div className="skillcolumn">
                    <SkillCard
                        photo={FlexibityImage}
                        skilltitle={"Flexibility"}
                        skill1={"Willing to adjust to a new circumstance \nor adopt a different strategy when necessary."}
                    />
                    <SkillCard
                        photo={ActiveListeningImage}
                        skilltitle={"Active Listening"}
                        skill1={"Considering colleagues' opinion to enhance \nmy work and foster stronger teamwork."}
                    />
                    <SkillCard
                        photo={TeamworkImage}
                        skilltitle={"Teamwork"}
                        skill1={"Able to work as a team to ensure project \nworks smoothly and efficiently as planned."}
                    />
                    <SkillCard
                        photo={CreativeImage}
                        skilltitle={"Creative Thinking"}
                        skill1={"Equipped with creative thinking to get \nnew ideas for projects, or risk management."}
                    />
                </div>
        </div>
    </section>
    )
}

export default Skills;