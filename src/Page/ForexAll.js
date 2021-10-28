import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import '../Css/Home.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

const baseURL = " http://127.0.0.1:5000/forexQuelyTest";


function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function FullWidthTabs() {
    
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const [Forex, setForex] = useState(null);

    useEffect(() => {

        axios.get(baseURL).then(response => {
            setForex(response.data)
            console.log(response.data)
        })

    }, [])


    return (

        <div>

            
        <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
            <AppBar position="static" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={{ backgroundColor: "#111111" }}
                >
                    <Tab label="M1" {...a11yProps(0)} />
                    <Tab label="M5" {...a11yProps(1)} />
                    <Tab label="M15" {...a11yProps(2)} />
                    <Tab label="M30" {...a11yProps(3)} />
                    <Tab label="H1" {...a11yProps(4)} />
                    <Tab label="H4" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}

            >

            {/* ทรามเฟรม M1 */}

                <TabPanel value={value} index={0} dir={theme.direction}>

                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ height: 30 }} />
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%" }} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div style={{ height: 30 }} />
                    
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>


                 {/* ทรามเฟรม M5 */}

                <TabPanel value={value} index={1} dir={theme.direction}>

                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ height: 30 }} />
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%" }} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div style={{ height: 30 }} />
                    
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>


                 {/* ทรามเฟรม M15 */}

                <TabPanel value={value} index={2} dir={theme.direction}>

                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ height: 30 }} />
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%" }} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div style={{ height: 30 }} />
                    
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                {/* ทรามเฟรม M30 */}
                <TabPanel value={value} index={3} dir={theme.direction}>

                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ height: 30 }} />
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%" }} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div style={{ height: 30 }} />
                    
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                {/* ทรามเฟรม H1 */}
                <TabPanel value={value} index={4} dir={theme.direction}>

                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ height: 30 }} />
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%" }} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div style={{ height: 30 }} />
                    
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                {/* ทรามเฟรม H4 */}
                <TabPanel value={value} index={5} dir={theme.direction}>

                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ height: 30 }} />
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%" }} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div style={{ height: 30 }} />
                    
                    <Grid container spacing={1} >

                        <Grid item xs={12}>
                            <Paper elevation={5} >
                                <div style={{ padding: "1%"}} className="font" >
                                    <h3 style={{color:"#1b6ac5"}}>EURUSD<span style={{ marginLeft: "50%" }}>ราคา</span></h3>
                                    <h4>แนะนำ</h4>
                                    <h4>แนวโน้มการผันตัว</h4>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
            </SwipeableViews>
        </Box>

        </div>
    );
}

export default FullWidthTabs

