import Head from "../components/head";
import Foot from "../components/foot";
import { Animated } from "react-animated-css";
import { PageTransition } from "next-page-transitions";
export default ({ children }) => (
  <div>
    <Head />
    <Animated animationIn="fadeIn" animationOut="fadeOut" isvisible={true}>
      {children}
    </Animated>
    <Foot />
  </div>
);
