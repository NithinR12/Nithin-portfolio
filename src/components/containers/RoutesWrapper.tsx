import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hi from "../layouts/Hi";
import NotFound from "./NotFound";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define context type
type ContextValue = {
  timeline?: gsap.core.Timeline;
};

// Create context
const MyContext = createContext<ContextValue>({});

// Define a custom hook to access the context
export const useMyContext = () => useContext(MyContext);

const RoutesWrapper: React.FC = () => {
  const [firstRender, setFirstRender] = useState(true);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({}));

  useLayoutEffect(() => {
    // Set firstRender to false after 2.5 seconds
    const timer = setTimeout(() => {
      setFirstRender(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      // Refresh ScrollTrigger after 0.5 seconds
      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(refreshTimer);
    }
  }, [firstRender]);

  return (
    <MyContext.Provider value={{ timeline: tl.current }}>
      <Hi visible={firstRender} />
      {!firstRender && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </MyContext.Provider>
  );
};

export default RoutesWrapper;
