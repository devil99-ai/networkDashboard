import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import SwitchIcon from "@mui/icons-material/SettingsEthernet";
import RouterIcon from "@mui/icons-material/Router";
import FirewallIcon from "@mui/icons-material/Whatshot";
import LoadBalancerIcon from "@mui/icons-material/Dns";
import VPNIcon from "@mui/icons-material/VpnLock";
import DnsIcon from '@mui/icons-material/Dns';

const devices = [
  { label: "Switch", icon: <SwitchIcon fontSize="large" />, path: "/switch-device/backupIndex" },
  { label: "Router", icon: <RouterIcon fontSize="large" /> , path: "/router-device/BackupIndex"},
  { label: "Firewall", icon: <FirewallIcon fontSize="large" />, path:"/firewall-device/BackupIndex" },
  { label: "Load Balancer", icon: <LoadBalancerIcon fontSize="large" />, path:"/loadBalancer-device/BackupIndex" },
  { label: "Checkpoint VPN", icon: <VPNIcon fontSize="large" />, path:"/checkpointVpn/BackupIndex"},
  { label: "Servers", icon: <DnsIcon fontSize="large" />, path:"/servers/backupIndex" },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  borderRadius: 12,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const DeviceBackup = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box p={4}>
      <Grid container spacing={3} justifyContent="center">
        {devices.map((device, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Item onClick={() => handleClick(device.path)}>
              {device.icon}
              <Typography variant="h6" mt={2}>
                {device.label}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DeviceBackup;