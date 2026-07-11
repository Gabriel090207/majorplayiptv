import "./Devices.css";

import {
  Monitor,
  MonitorSmartphone,
  Smartphone,
  Tv,
} from "lucide-react";

import {
  FaAndroid,
  FaApple,
  FaFire,
} from "react-icons/fa";

const devices = [
  {
    icon: <Tv size={42} />,
    title: "Smart TV",
  },
  {
    icon: <FaAndroid size={40} />,
    title: "Android",
  },
  {
    icon: <FaApple size={40} />,
    title: "iPhone / iOS",
  },
  {
    icon: <MonitorSmartphone size={42} />,
    title: "TV Box",
  },
  {
    icon: <FaFire size={38} />,
    title: "Fire TV Stick",
  },
  {
    icon: <Monitor size={42} />,
    title: "Computador",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Tablet",
  },
];

const Devices = () => {
  return (
    <section className="devices" id="download">
      <div className="container">

        <div className="devices__header">

          <span className="devices__badge">
            ASSISTA ONDE QUISER
          </span>

          <h2 className="devices__title">
            Compatível com seus <span>dispositivos</span>
          </h2>

        </div>

        <div className="devices__grid">

          {devices.map((device) => (
            <div
              key={device.title}
              className="device"
            >
              <div className="device__icon">
                {device.icon}
              </div>

              <span>{device.title}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Devices;