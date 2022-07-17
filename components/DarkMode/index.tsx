import dynamic from "next/dynamic";

import useLocalStorageState from "use-local-storage-state";

import FixedSection from "components/FixedSection";

const Moon = dynamic(import("components/Icons/Moon"));
const Sun = dynamic(import("components/Icons/Sun"));

function DarkMode() {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode");

  return (
    <FixedSection
      onClick={() => setDarkMode(!darkMode)}
      position="absolute"
      location="rightTop"
    >
      {darkMode ? <Sun /> : <Moon />}
    </FixedSection>
  );
}

export default DarkMode;
