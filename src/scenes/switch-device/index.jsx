import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const options = [
  { label: "Dell Sonic", path: "/switches/dellSonic/index" },
  { label: "Dell Switch", path: "/switches/dell/index" },
  { label: "Cisco IOS", path: "/switches/ciscoIOS/index" },
  { label: "Cisco Nexus", path: "/switches/Nexus/index" },
  { label: "Cisco Cumulus", path: "/switches/Cumulus/index" },
];

const OptionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[3],
  borderRadius: 12,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SwitchDevicesPage = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Switch Device Options
      </Typography>
      <Grid container spacing={3}>
        {options.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <OptionCard onClick={() => navigate(item.path)}>
              <Typography variant="h6">{item.label}</Typography>
            </OptionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SwitchDevicesPage;
