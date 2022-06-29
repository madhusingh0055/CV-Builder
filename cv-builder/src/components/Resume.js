import React from "react";
import './Resume.css'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';


const Resume = (props) => {

   
   function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }


    return (
        <>

<div className="mb5">
        <button onClick={printDocument} className="btn" >Print</button>
      </div>
            <div id="divToPrint" className='page'>

                <h1 className="name">{props.name}</h1>
                <p className="email"><MailIcon  style={{fontSize: 'small'}}/> {props.email}</p>
                <p className="phone"> <ContactPhoneIcon  style={{fontSize: 'small'}} /> {props.phoneNumber}</p>
                <p className="address"><HomeIcon style={{fontSize: 'small'}} /> {props.address} - {props.zipCode}</p>
                <p className="c-obj">Career Objective </p>
                <hr />
                <p className="objective">{props.objective}</p>
                <p className="c-obj"> Skills </p>
                <hr />
                <p className="objective" >{props.skills}</p>
                <p className="c-obj"> Experience </p>
                <hr />
                <p className="objective">{props.experience}</p>
                <p className="c-obj"> Education </p>
                <hr />
                <p className="objective">{props.education}</p>

                <p className="c-obj"> Achievement </p>
                <hr />
                <p className="objective">{props.achievement}</p>
                
                <p className="c-obj"> Hobbies </p>
                <hr />
                <p className="objective">{props.Hobbies}</p>
                
                
            </div>
        </>
    )
}

export default Resume;