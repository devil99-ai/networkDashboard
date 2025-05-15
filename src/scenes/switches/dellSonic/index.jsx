import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const options = [
  { label: "Normal Mode", path: "/CommandExecution/dellSonicMode/index" },
  { label: "Sonic Cli Mode", path: "/CommandExecution/dellSonicMode/SonicIndex" },
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

const SonicSwitchModeDevicesPage = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Switch Device Mode
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

export default SonicSwitchModeDevicesPage ;
