import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SkillsAccordian = () => {
  return (
    <div className='w-4/5 sm:w-3/4 mx-auto mt-16'>
      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Frontend
        </AccordionSummary>
        <AccordionDetails>
          React JS, TypeScript, ShadCN, Tailwind CSS, Bootstrap & AJAX
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Backend
        </AccordionSummary>
        <AccordionDetails>
          Node JS, Express, Django, Django REST Framework & Firebase
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Databases
        </AccordionSummary>
        <AccordionDetails>
          MongoDB, MySQL, MS SQL Server & SQLite
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gray-800 text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Version Control
        </AccordionSummary>
        <AccordionDetails>
          Git & GitHub
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default SkillsAccordian