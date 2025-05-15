import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function LbTmshCommandExecution() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ipaddress, setIpAddress] = useState("");
  const [command, setCommand] = useState([""]);
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
      command,
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

  const addCommandField = () => {
    setCommand([...command, ""]);
  };

  const removeCommandField = (index) => {
    const newCommand = [...command];
    newCommand.splice(index, 1);
    setCommand(newCommand);
  };

  const updateCommand = (index, value) => {
    const newCommand = [...command];
    newCommand[index] = value;
    setCommand(newCommand);
  };

  return (
    
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          Remote Command Execution
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

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Command(s):
          </Typography>
          {command.map((cmd, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={1}
              mt={1}
            >
              <TextField
                label={`Command ${index + 1}`}
                variant="outlined"
                fullWidth
                required
                value={cmd}
                onChange={(e) => updateCommand(index, e.target.value)}
              />
              {command.length > 1 && (
                <IconButton onClick={() => removeCommandField(index)} color="error">
                  <RemoveIcon />
                </IconButton>
              )}
            </Box>
          ))}
          <Box mt={2} display="flex" justifyContent="flex-start">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={addCommandField}
            >
              Add Command
            </Button>
          </Box>

          <Box mt={4} display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Executing..." : "Execute & Download"}
            </Button>
          </Box>

          {downloadUrl && (
            <Box mt={3} textAlign="center">
              <Button
                variant="outlined"
                href={downloadUrl}
                download="ssh_output.txt"
              >
                Download Output File
              </Button>
            </Box>
          )}
        </Box>
    
      </Paper>
    </Container>
  );
}

export default LbTmshCommandExecution;