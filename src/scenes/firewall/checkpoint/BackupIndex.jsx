import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  
} from "@mui/material";


function CheckpointBackup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ipaddress, setIpAddress] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDownloadUrl(null);

    const requestBody = {
      ipaddress,
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:8082/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setDownloadUrl(url);
      } else {
        alert("Error executing command");
      }
    } catch (error) {
      alert("Execution error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          Device Backup
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="IP Address"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={ipaddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          

          <Box mt={4} display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Taking Backup..." : "Backup & Download"}
            </Button>
          </Box>

          {downloadUrl && (
            <Box mt={3} textAlign="center">
              <Button
                variant="outlined"
                href={downloadUrl}
                download="ssh_output.txt"
              >
                Download Backup File
              </Button>
            </Box>
          )}
        </Box>
    
      </Paper>
    </Container>
  );
}

export default CheckpointBackup;
