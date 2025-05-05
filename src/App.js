import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {ColorModeContext, useMode} from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import SonicCommandExecution from './scenes/switches/dellSonic';
import DeviceIosUpgrade from './scenes/IOSUpgrade';
// import Bar from './scenes/bar';
import Form from './scenes/form';
import CommandExecution from './scenes/CommandExecution';
import DellCommandExecution from './scenes/switches/dell';
import CiscoCommandExecution from './scenes/switches/ciscoIOS';
import NexusCommandExecution from './scenes/switches/Nexus';
import CumulusCommandExecution from './scenes/switches/Cumulus';
import SwitchDevicesPage from './scenes/switch-device';
import DeviceBackup from './scenes/deviceBackup';
import SwitchDevicesBackupPage from './scenes/deviceBackup/devices';
import RouterDevicesPage from './scenes/router-device';
import CiscoRouterCommandExecution from './scenes/routers/cisco';
import FirewallDevicesPage from './scenes/firewall-device';
import CiscoFMCCommandExecution from './scenes/firewall/ciscoFMC';
import LbDevicesPage from './scenes/loadBalancer-device';
import LbCommandExecution from './scenes/LB/F5';
import ServersPage from './scenes/servers';
import LinuxCommandExecution from './scenes/server/linux';
import UbuntuCommandExecution from './scenes/server/ubuntu';
import WindowsCommandExecution from './scenes/server/windows';
import CheckpointCommandExecution from './scenes/firewall/checkpoint';
import CheckpointVpnCommandExecution from './scenes/checkpointVpn';
import DellSonicBackup from './scenes/deviceBackup/devices/switchDevice/dellSonic';
// import FAQ from './scenes/faq';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';

function App() {
  const [theme,colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
  {/* {------------------------------------------command execution elements route--------------------------------------} */}
              <Route path="/CommandExecution" element={<CommandExecution />} />
              <Route path="/form" element={<Form />} />
              {/* {for all switch command execution} */}
              <Route path="/switch-device" element={<SwitchDevicesPage />} />
              <Route path="/switches/dellSonic/index" element={<SonicCommandExecution />} />
              <Route path="/switches/dell/index" element={<DellCommandExecution />} />
              <Route path="/switches/ciscoIOS/index" element={<CiscoCommandExecution />} />
              <Route path="/switches/Nexus/index" element={<NexusCommandExecution />} />
              <Route path="/switches/Cumulus/index" element={<CumulusCommandExecution />} />
              {/* {router devices} */}
              <Route path="/router-device" element={<RouterDevicesPage/>} />
              <Route path="/routers/cisco/index" element={<CiscoRouterCommandExecution />} />
              {/* {firewall devices} */}
              <Route path="/firewall-device" element={<FirewallDevicesPage/>}/>
              <Route path="/firewall/ciscoFMC/index" element={<CiscoFMCCommandExecution/>}/>
              <Route path="/firewall/checkpoint/index" element={<CheckpointCommandExecution/>}/>
              {/* {load balancers} */}
              <Route path="/loadBalancer-device" element={<LbDevicesPage/>}/>
              <Route path="/LB/F5/index" element={<LbCommandExecution />} />
              {/* {check point vpn} */}
              <Route path="/checkpointVpn" element={<CheckpointVpnCommandExecution/>}/>



              {/* {servers} */}
              <Route path="/servers" element={<ServersPage/>}/>
              <Route path="/server/linux/index" element={<LinuxCommandExecution/>}/>
              <Route path="/server/ubuntu/index" element={<UbuntuCommandExecution/>}/>
              <Route path="/server/windows/index" element={<WindowsCommandExecution/>}/>
{/* {------------------------------------------Device backup elements route--------------------------------------------} */}              
              <Route path="/deviceBackup" element={<DeviceBackup />} />
              <Route path="/deviceBackup/devices/switchDevice" element={<SwitchDevicesBackupPage/>}/>
              <Route path="/deviceBackup/devices/switchDevice/dellSonic/index" element={<DellSonicBackup/>}/>
 {/* {------------------------------------------Device IOS Upgrade elements route--------------------------------------------} */}              
              <Route path="/IOSUpgrade" element={<DeviceIosUpgrade/>} />           
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;