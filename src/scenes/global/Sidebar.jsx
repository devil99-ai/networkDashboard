import { useState } from "react";
import {ProSidebar,Menu,MenuItem} from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton,Typography,useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import BackupIcon from "@mui/icons-material/BackupOutlined";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import GppGoodIcon from '@mui/icons-material/GppGoodOutlined';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeartOutlined';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({title,to,icon,selected,setSelected})=>{
    const theme = useTheme();
    const colors=tokens(theme.palette.mode);
    return(
        <MenuItem 
        active={selected===title} 
        style={{
            color:colors.grey[100],
            }} 
            onClick={()=>setSelected(title)}
             icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};
const Sidebar = () => {
    const theme=useTheme();
    const colors =tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed] = useState(false);
    const[selected, setSelected] = useState('Dashboard');



    return(
        <Box
        sx={{
            "& .pro-sidebar-inner":{
                background:`${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper":{
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item":{
                padding: "5px 35px 5px 30px !important",
            },
            "& .pro-inner-item:hover":{
                color:"#868dfb !important",
            },
            "& .pro-menu-item.active":{
                color:"#6870fa !important",
            },
        }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/*Logo and Menu Icon*/}
                    <MenuItem
                    onClick={()=>setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon/>:undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color:colors.grey[100],
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* {user } */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../assets.user.png`}
                                style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                
                                <Typography variant="h5" color={colors.grey[500]}>
                                    Autonomous Network Dashboard
                                </Typography>
                            </Box>
                            </>
                        </Box>
                    )}
                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : "5%"}>
                        <Item 
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                            <Typography
                                 variant="h6"
                                 color={colors.grey[300]}
                                 sx={{ m: "15px 0 5px 20px" }}
                            >
                                User Data
                            </Typography>

                        <Item 
                            title="Manage User"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                                 variant="h6"
                                 color={colors.grey[300]}
                                 sx={{ m: "15px 0 5px 20px" }}
                            >
                            Operation
                            </Typography>

                        <Item 
                            title="Remote Command Execution"
                            to="/CommandExecution"
                            icon={<SettingsRemoteIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Device Backup"
                            to="/deviceBackup"
                            icon={<BackupIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="IOS Upgrade"
                            to="/IOSUpgrade"
                            icon={<BrowserUpdatedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="SSL Renewal"
                            to="/calendar"
                            icon={<GppGoodIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Patch Update"
                            to="/faq"
                            icon={<UpgradeIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                            <Typography
                                 variant="h6"
                                 color={colors.grey[300]}
                                 sx={{ m: "15px 0 5px 20px" }}
                            >
                                Charts
                            </Typography>                        

                        <Item 
                            title="Device Status"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title="Device Health"
                            to="/pie"
                            icon={<MonitorHeartIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        
                        <Item 
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                                 variant="h6"
                                 color={colors.grey[300]}
                                 sx={{ m: "15px 0 5px 20px" }}
                            >
                                Advance
                            </Typography> 

                        <Item 
                            title="Automations"
                            to="/line"
                            icon={<AutoModeIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>

            </ProSidebar>
        </Box>
        
    );
};

export default Sidebar;
