import { BrowserRouter, Switch, Route } from "react-router-dom";

// projects
import Stopwatch from "./projects/stopwatch";
import AlarmClock from "./projects/alarm-clock";
import Timer from "./projects/timer";
import Clock from "./projects/clock";

// global styles
import GlobalStyles from "./global-styles";

const App = ({ mainColor }) => {
  return (
    <BrowserRouter>
      <dip className='App'>
        <GlobalStyles mainColor={mainColor} />
        <Switch>
          <Route path='/stopwatch' component={Stopwatch} />
          <Route path='/alarm' component={AlarmClock} />
          <Route path='/timer' component={Timer} />
          <Route path='/clock' component={Clock} />
        </Switch>
      </dip>
    </BrowserRouter>
  );
};

export default App;
