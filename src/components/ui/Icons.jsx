/**
 * Central icon registry — maps string keys (used in data files) to
 * react-icons SVG components. Import <Icon name="key" /> anywhere in the app.
 *
 * Usage:   <Icon name="flask" size={22} />
 *          <Icon name="shield" className="my-class" style={{ color: 'red' }} />
 */

import {
  FaFlask, FaPills, FaMicroscope, FaHospital, FaSeedling, FaMicrochip,
  FaShieldAlt, FaWrench, FaSyncAlt, FaBiohazard, FaWind, FaShower,
  FaChair, FaHardHat, FaCheckCircle, FaTint, FaRobot, FaClipboardList,
  FaChartBar, FaCog, FaRulerCombined, FaThermometerHalf, FaLock,
  FaMedal, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGlobe,
  FaIndustry, FaBoxes, FaBolt, FaMagic, FaUserTie, FaFileAlt, FaEdit,
  FaHandSparkles,
} from 'react-icons/fa';
import { FaDna } from 'react-icons/fa6';
import { GiWheat, GiVirus } from 'react-icons/gi';
import { MdGridView, MdCleaningServices } from 'react-icons/md';

const ICON_MAP = {
  /* ── Products / Categories ── */
  flask:           FaFlask,
  pills:           FaPills,
  dna:             FaDna,
  microscope:      FaMicroscope,
  hospital:        FaHospital,
  seedling:        FaSeedling,
  microchip:       FaMicrochip,
  petri:           GiVirus,
  shield:          FaShieldAlt,
  wrench:          FaWrench,
  sync:            FaSyncAlt,
  biohazard:       FaBiohazard,
  wind:            FaWind,
  shower:          FaShower,
  chair:           FaChair,
  hardhat:         FaHardHat,
  grid:            MdGridView,
  industry:        FaIndustry,
  boxes:           FaBoxes,
  wheat:           GiWheat,
  bolt:            FaBolt,

  /* ── UI / Compliance ── */
  'check-circle':  FaCheckCircle,
  tint:            FaTint,
  robot:           FaRobot,
  clipboard:       FaClipboardList,
  'chart-bar':     FaChartBar,
  cog:             FaCog,
  sparkles:        FaMagic,
  ruler:           FaRulerCombined,
  soap:            MdCleaningServices,
  thermometer:     FaThermometerHalf,
  lock:            FaLock,
  medal:           FaMedal,

  /* ── Contact / Footer ── */
  'map-marker':    FaMapMarkerAlt,
  phone:           FaPhone,
  envelope:        FaEnvelope,
  clock:           FaClock,
  globe:           FaGlobe,

  /* ── About / Team ── */
  'user-tie':      FaUserTie,
  'file-alt':      FaFileAlt,
  'file-edit':     FaEdit,
  handsparkles:    FaHandSparkles,
};

export default function Icon({ name, size = 20, className, style }) {
  const Cmp = ICON_MAP[name];
  if (!Cmp) return null;
  return <Cmp size={size} className={className} style={style} />;
}
