import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

import adam from "./assets/adam.png";
import adambybarn from "./assets/adambybarncopy.jpg";
import techstack from "./assets/techcopy.JPG";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const MainStyle = styled.div`
    /* JUMPTRON */
    .main-jumbotron-wrapper {
        margin-top: 10px;
    }
    .adam {
        display: block;
        margin-right: 30%;
        max-height: 800px;
        max-width: 100%;
    }
    .adam-overlay {
        display: flex;
        justify-content: center;
        border-bottom: 2px solid maroon;
        max-width: 100%;

        @media only screen and (max-width: 1100px) {
            flex-wrap: wrap;
            border-bottom: none;
        }
    }
    .adam-label {
        position: absolute;
        top: max(50%, 300px);
        bottom: max(auto, 500px);
        max-width: 100%;
        
        @media only screen and (max-width: 1100px) {
            display: block;
            position: relative;
        }
    }

    .adam-label-card {
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 2px 2px 2px 2px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        @media only screen and (max-width: 1100px) {
            border-bottom: 2px solid maroon;
        }
    }

    .greeting-text {
        font-size: 50px;
    }

    .introduction-text {
        font-size: 20px;
    }

    /*ABOUT ME*/

    .adam-by-barn {
        max-width: 100%;
        max-height: 800px;
        /* max-width: 100%; */
    }

    .about-me-text {
        text-align: left;
        max-width: 400px;
        margin-left: 10px;
        line-height: 1.8;
    }

    .about-me-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 1100px) {
            flex-wrap: wrap;
        }
    }

    .contact-button {
        border: 2px solid maroon;
        color: maroon;
    }

    /*EDUCATION AND EXPERIENCE*/

    .experience-wrapper {
        background-color: maroon;
        color: white;
        text-align: center;
    }

    /*ABOUT THIS WEBSITE*/

    /*FOOTER*/

    .footer-wrapper {
        /* display: none; */
        text-align: center;
        border-top: 2px solid maroon;
        background-color: maroon;

    }

    .icons-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-grow: 0;

        @media only screen and (max-width: 500px) {
            flex-wrap: wrap;
        }
    }
`

export class Home extends React.Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 2000, mirror: true});
    }
    render() {
        return(
        <MainStyle>
            <Grid className="main-jumbotron-wrapper">
                <div className="adam-overlay">
                    <img src={adam} className="adam" alt="Adam Qian" id="back-to-top-anchor"/>
                    <div className="adam-label" data-aos="fade-zoom-in">
                        <Card className="adam-label-card">
                            <CardContent>
                                <h1 className="greeting-text">Hi, I'm Adam!</h1>
                                <div>
                                    <p className="introduction-text">
                                        I'm a commerce student at the Smith School of Business and a full-stack web developer.
                                    </p>
                                </div>
                                
                            </CardContent>
                            <CardActions>
                                <Button href="https://drive.google.com/file/d/1jbG5jqcHAYaCRou8YwtH5XN7avpCgPTA/view?usp=sharing" target="_blank" rel="noopener">
                                    <strong style={{"color":"maroon"}}>Resume</strong>
                                </Button>
                                <Button href="https://www.linkedin.com/in/adamqian/" target="_blank" rel="noopener">
                                    <strong style={{"color":"maroon"}}>LinkedIn</strong>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </Grid>
            <div style={{"textAlign":"center", "marginTop":"50px", "marginBottom":"50px"}}>
                <h1 style={{"fontSize":"50px", }}>About Me</h1>
                <div className="about-me-wrapper"  >
                    <img src={adambybarn} alt="Adam Qian" className="adam-by-barn" data-aos="fade-up" data-aos-duration="4000" data-aos-mirror="true" 
                    data-aos-anchor-placement="bottom-bottom"/>
                    <p className="about-me-text" data-aos="fade-up" data-aos-duration="4000" data-aos-mirror="true" data-aos-anchor-placement="bottom-bottom">
                        I'm a commerce student currently studying at the Smith School of Business at Queen's University.
                        <br /><br />
                        <strong>I'm passionate about finance, accounting, data analytics, and programming. </strong>
                        Even though my background is in commerce, learning about computing opened my eyes to the seemingly 
                        limitless applications computing has in modern business.
                        <br /><br />
                        One day, I want to meaningfully contribute to innovating the way businesses leverage technology.
                        <br /><br />
                        In my free time, I love working on side projects (such as this website) and hiking in the Rocky Mountains.
                        <br /><br />
                        <Button className="contact-button" href="/contact">Contact Me</Button>
                    </p>
                </div>
            </div>
            <div className="experience-wrapper">
                <h1 style={{"fontSize":"50px"}}>Education and Experience</h1>
                <Container>
                    <Experience 
                    company="Queen's University" 
                    date="September 2018 - Present"
                    location="Kingston, Ontario"
                    role="Bachelor of Commerce"
                    description="I'm currently in my third year of my Bachelor's of Commerce. I have a GPA of
                    3.96 and plan to specialize in finance and accounting. I also take a variety of 
                    computing science courses along with my core commerce courses. I believe in challenging 
                    myself, and doing what I'm passionate about."
                    link="http://smith.queensu.ca"
                    />
                    <Experience 
                    company="Secure Energy Services" 
                    date="May 2019 - August 2019"
                    location="Calgary, Alberta"
                    role="Measurement and Quality Summer Student"
                    description="I was responsible for maintaining critical company databases and schematics.
                    I also monitored measurement instruments by analyzing data, writing reports, and proposing
                    a modernization project of facility hardware. I was able to greatly improve my proficiency
                    with Microsoft Office and get a much better idea of what kind of corporate culture I thrive in."
                    link="http://www.secure-energy.com/"
                    />
                    <Experience 
                    company="Walmart Canada" 
                    date="May 2020 - July 2020"
                    location="Calgary, Alberta"
                    role="Seasonal Sales Associate"
                    description="I worked in the frozen and dairy section of a Walmart store stocking shelves,
                    maintaining accurate counts of inventory, and assisting customers. At Walmart, I gained
                    experience dealing with customers, learned about supply chain management, and met some of
                    the hardest working people I've ever worked with."
                    link="http://www.walmart.ca/"
                    />
                    <Experience 
                    company="Queen's University Alma Mater Society" 
                    date="September 2019 - Present"
                    location="Kingston, Ontario"
                    role="Food Bank Marketing Coordinator"
                    description="At the AMS Food Bank, I am responsible for all marketing activities. During the
                    Covid-19 pandemic, my job is to manage the food bank's social media accounts and create 
                    content for them. I want to give back to the Queen's University community and show my 
                    appreciation for all the support they've given me."
                    link="https://myams.org/team-details/food-centre/"
                    />
                    <p style={{"marginTop":"30px"}}>A more detailed account of my experiences can be found in my resume.</p>
                    <Button style={{"border":"2px solid white", "color":"white", "marginBottom":"20px"}} 
                     href="https://drive.google.com/file/d/1jbG5jqcHAYaCRou8YwtH5XN7avpCgPTA/view?usp=sharing" target="_blank" rel="noopener">My Resume</Button>
                </Container>
            </div>
            <div style={{"textAlign":"center", "marginTop":"50px", "marginBottom":"50px"}}>
                <h1 style={{"fontSize":"50px", }}>About This Website</h1>
                <div className="about-me-wrapper"  >
                    <p className="about-me-text" data-aos="fade-up" data-aos-duration="4000" data-aos-mirror="true" data-aos-anchor-placement="bottom-bottom">
                        <strong>This website is mainly intended to be a short, interactive version of my resume.</strong> It's also a testing ground for 
                        my web-development ideas and my first blog.
                        <br /><br />
                        I taught myself everything I know about web development. Over the summer of 2020, my job at Walmart was part-time, so I had a lot of
                        spare time to pick up web development.
                        <br /><br />
                        I would still consider myself in the very early stages of my web development journey. I still have so much to learn!
                        <br /><br />
                        This website was built with ReactJS and ExpressJS. See source code below (feedback appreciated).
                        <br /><br />
                        <Button className="contact-button" href="content">Source Code</Button>
                    </p>
                    <img src={techstack} alt="Tech Stack" className="adam-by-barn" data-aos="fade-up" data-aos-duration="4000" data-aos-mirror="true" data-aos-anchor-placement="bottom-bottom"/>
                    
                </div>
            </div>
            <div className="footer-wrapper">
                <Container>
                    <div className="icons-wrapper">
                        <div>
                            <IconButton>
                                <GitHubIcon style={{"fontSize":"100", "color":"white"}} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LinkedInIcon style={{"fontSize":"100", "color":"white"}} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <MailOutlineIcon style={{"fontSize":"100", "color":"white"}} />
                            </IconButton>
                        </div>
                    </div>
                </Container>
            </div>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon style={{"color":"maroon"}}/>
                </Fab>
            </ScrollTop>
        </MainStyle>
        );
    }
}

const ExperienceStyle = styled.div`
    .experience-wrapper {
        text-align: left;
        display: flex;
        align-items: baseline;
    }

    .website-button {
        border: 2px solid white;
        color: white;
        margin-bottom: 10px;
    }
`

const ExperienceCompany = styled.span`
    {
        font-size: 30px;
        font-weight: bold;
    }
`

const ExperienceDate = styled.span`
    {
        color: lightgray;
    }
`

const ExperienceRole = styled.span`
    {
        font-weight: bold;
    }
`

class Experience extends React.Component {
    render() {
        return(
            <ExperienceStyle>
                <Grid container className="experience-wrapper" data-aos="zoom-in-up" data-aos-duration="4000" >
                    <Grid item xs style={{"marginRight": "5px"}}>
                        <p>
                            <ExperienceCompany>{this.props.company}</ExperienceCompany><br />
                            <ExperienceDate>{this.props.date}</ExperienceDate> <br />
                            <ExperienceDate>{this.props.location}</ExperienceDate>
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>
                            <ExperienceRole>{this.props.role}</ExperienceRole>
                            <br />
                            {this.props.description}
                        </p>
                        <Button className="website-button" target="_blank" rel="noopener" href={this.props.link}>Website</Button>
                    </Grid>
                </Grid>
            </ExperienceStyle>
        );
    }
}

const useStyles = makeStyles(theme => ({ /* Use of functional component for userScrollTrigger() hook */
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  
function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}
