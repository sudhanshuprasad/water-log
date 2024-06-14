"use client"
import { Accordion, AccordionDetails, AccordionSummary, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Navbar from '@/components/Navbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Settings = () => {

    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div className='h-screen bg-slate-300'>
            <Navbar />
            <div className='items-center justify-center m-4 mt-10'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header">
                        <Typography> Change WiFi Password </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='flex items-center justify-center mb-6'>

                            <Stack
                                component="form"
                                sx={{
                                    width: '25ch',
                                }}
                                spacing={2}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField
                                    label="Wifi Name (SSID)"
                                    id="filled-hidden-label-small"
                                    defaultValue="My WiFi"
                                    variant="filled"
                                />
                                <TextField
                                    label="Wifi Password"
                                    id="filled-hidden-label-normal"
                                    defaultValue="Password"
                                    variant="filled"
                                />
                            </Stack>

                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Collapsible Group Item #2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Collapsible Group Item #3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

            <div className='flex items-center justify-center m-20'>

                <Stack
                    component="form"
                    sx={{
                        width: '25ch',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >

                    <Typography>
                        Change WiFi Password
                    </Typography>

                    <TextField
                        label="Wifi Name (SSID)"
                        id="filled-hidden-label-small"
                        defaultValue="My WiFi"
                        variant="filled"
                    />
                    <TextField
                        label="Wifi Password"
                        id="filled-hidden-label-normal"
                        defaultValue="Password"
                        variant="filled"
                    />
                </Stack>

            </div>

        </div>
    )
}

export default Settings
