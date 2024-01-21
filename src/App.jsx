import GetBrowserLanguage from "./components/GetBrowserLanguage";
import GetLocalTimezoneWithMoment from "./components/GetLocalTimezoneWithMoment";
import GetLocalTimezone from "./components/GetLocalTimezone";
import GetLocationIpInfo from "./components/GetLocationIpInfo";

function App() {
  return (
    <>
      <h1>Get User Location Research</h1>
      <GetBrowserLanguage />
      <GetLocalTimezone />
      <GetLocalTimezoneWithMoment />
      <GetLocationIpInfo />
    </>
  );
}

export default App;
