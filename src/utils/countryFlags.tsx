import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

const COUNTRY_FLAG = {
  Nigeria: "🇳🇬",
  Germany: "🇩🇪",
  Ghana: "🇬🇭",
  Finland: "🇫🇮",
  "United Kingdom": "🇬🇧",
} as any;

const SOURCE_LOGO = {
  facebook: <FaFacebookF color="#1877F2" />,
  linkedin: <FaLinkedin color="#1877F2" />,
  google: <FaGoogle color="red" />,
  instagram: <FaInstagram color="purple" />,
} as any;

export const x = {
  COUNTRY_FLAG,
  SOURCE_LOGO,
};
