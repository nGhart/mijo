import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import ActionButton from "../../components/common/ActionButton";
import HeaderOne from "../../components/common/HeaderOne";
import Reveal from "../../components/common/Reveal";

const GetStarted = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <HeaderOne
        title="Get Started with Mijo"
        subtitle="Built by Ghanaians, for Ghanaians.
Download the GhanaPostGPS App, tap on MIJO and experience rides and delivery, the MIJO way.
"
      />
      <Reveal direction="down" delay={200}>
        <div className="flex justify-center gap-8">
          <ActionButton
            image={appStore}
            text="App Store"
            // link="https://apps.apple.com/us/app/ghanapostgps/id1296627307?ls=1"
            link="https://apps.apple.com/us/app/ghanapost-mijo-driver/id6464409910"
          />
          <ActionButton
            image={playStore}
            text="Play store"
            // link="https://play.google.com/store/apps/details?id=com.ghanapostgps.ghanapost&hl=en"
            link="https://play.google.com/store/apps/details?id=com.ghanapostgps.mijodriver&hl=en_US"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default GetStarted;
