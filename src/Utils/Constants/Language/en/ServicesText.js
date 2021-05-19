import * as Icons from "../../../../assets/icons/icon.constants";
import { Colors } from "../../../../Theme/color.constants";

const { App, Profile, Web, Digital } = Icons;
const { Serenade, FairPink, AquaSpring, LilyWhite} =
  Colors;
export const Data = {
  title: "We Offer Quality",
  subTitle: "Services and Solutions",
  subheading: "To start-ups and enterprises across the globe",
};

export const ServicesData = [
  {
    color: Serenade,
    icon: App,
    title: "Developer Hiring",
    desc: " In compliance with global standards, we can quickly build you a team that suits your business case from our talent pool of developers with industry-specific skills.",
  },
  {
    color: FairPink,
    icon: Profile,
    title: "App Development",
    desc: "Through a deep understanding of our client’s environment, market, vision, we provide the latest, efficient, adaptive and value add technology to put them a step above the competition.",
  },

  {
    color: AquaSpring,
    icon: Web,
    title: "Web Development",
    desc: " We offer end-to-end, full-cycle app development solutions that deliver personalized user experiences ensuring higher life-time value.",
  },

  {
    color: LilyWhite,
    icon: Digital,
    title: "Digital Marketing",
    desc: "The future is digital. With Magnit’s help, dominate your market through conversions and lead driven content. Make information work for you to create an indestructible online presence.",
  },
];

export default { ServicesData };
