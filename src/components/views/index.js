import ShortRangeComm from './ShortRangeComm';
import LongRangeComm from './LongRangeComm';
//import AdminStations from './AdminStations';
import EngineControl from './EngineControl';
import Thrusters from './Thrusters';
import Navigation from './Navigation';
import Sensors from './Sensors';
import AdminAssets from './AdminAssets';
import ShieldControl from './ShieldControl';
import Transporters from './Transporters';
import Login from './Login';

import EngineControlCore from './EngineControl/core';
import TransporterCore from './Transporters/core';
import SensorsGridCore from './Sensors/gridCore';
import SensorsCore from './Sensors/core';
const Views = {Login, ShortRangeComm,LongRangeComm,AdminAssets,Thrusters,EngineControl,Navigation,Sensors, ShieldControl, Transporters};

export const Cores = {EngineControlCore, TransporterCore, SensorsGridCore, SensorsCore};

export default Views;
