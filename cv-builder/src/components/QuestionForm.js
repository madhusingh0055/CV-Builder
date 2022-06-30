import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import './QuestionForm.css'
import Resume from "./Resume";

const QuestionForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState();
    const [objective, setObjective] = useState();
    const [skills, setSkills] = useState();
    const [experience, setExperience] = useState();
    const [education, setEducation] = useState();
    const [zipCode, setZipCode] = useState();
    const [achievement, setAchievement] = useState();
    const [Hobbies, setHobbies] = useState();



    return (
        <>
            <div>
                <h1 className="heading">Resume Generator</h1>
            </div>
            <div className="row">

                <div className="col-sm-6">
                    <TextField id="outlined-basic" label="What is your name?" variant="outlined" value={name}
                        onChange={(e) => setName(e.target.value)} className="text" />

                    <br /><br />

                    <TextField id="outlined-basic" label="Email address" variant="outlined" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="text" />

                    <br /><br />

                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} className="text" />

                    <br /><br />

                    <TextField id="outlined-basic" label="Address" variant="outlined" value={address}
                        onChange={(e) => setAddress(e.target.value)} className="text" />
                    <br /><br />


                    <TextField id="outlined-basic" label="Zip Code" variant="outlined" value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)} className="text" />
                    <br /><br />


                    <TextField id="outlined-basic" label="Objectives" variant="outlined" value={objective}
                        onChange={(e) => setObjective(e.target.value)} className="text" />
                    <br /><br />


                    <TextField id="outlined-basic" label="Skills" variant="outlined" value={skills}
                        onChange={(e) => setSkills(e.target.value)} className="text" />
                    <br /><br />


                    <TextField id="outlined-basic" label="Experience" variant="outlined" value={experience}
                        onChange={(e) => setExperience(e.target.value)} className="text" />
                    <br /><br />


                    <TextField id="outlined-basic" label="Education" variant="outlined" value={education}
                        onChange={(e) => setEducation(e.target.value)} className="text" />

                    <br /> <br />


                    <TextField id="outlined-basic" label="Achievement" variant="outlined" value={achievement}
                        onChange={(e) => setAchievement(e.target.value)} className="text" />

                    <br /> <br />


                    <TextField id="outlined-basic" label="Hobbies" variant="outlined" value={Hobbies}
                        onChange={(e) => setHobbies(e.target.value)} className="text" />
                </div>



                <div className="col-sm-6">
                    <Resume name={name} email={email} phoneNumber={phoneNumber} address={address} objective={objective} skills={skills}
                        experience={experience} education={education} zipCode={zipCode} achievement={achievement} Hobbies={Hobbies} />
                </div>
            </div>
        </>
    )
}

export default QuestionForm;