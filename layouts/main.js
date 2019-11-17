import Head from "../components/head";
import Foot from "../components/foot";
import { Animated } from "react-animated-css";
export default ({ children }) => (
  <div>
    <Head />
    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isvisible={true}>
      {children}
    </Animated>
    <Foot />
  </div>
);
