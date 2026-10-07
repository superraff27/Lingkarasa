import { IMG } from "../data/images.js";

export default function Logo({ className = "" }) {
  return (
    <div className={`logo ${className}`}>
      <img className="logo-icon" src={IMG.icon} alt="" />
      <img className="logo-word" src={IMG.wordmark} alt="Lingkarasa donut & coffee" />
    </div>
  );
}