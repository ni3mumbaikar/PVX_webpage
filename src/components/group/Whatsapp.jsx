import React from "react";

export default function Whatsapp(props) {
  const { wagroups } = props;
  function showAtag(url) {
    if (url === "" || url === "https://") return false;
    return true;
  }

  return (
    <div className="wa groups">
      <h3 className="app-heading">WHATSAPP</h3>
      <div className="group-container">
        {wagroups.map((group, index) => {
          //won't add a tag when url are not set or blocked
          return showAtag(group.url) ? (
            <a
              href={group.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div data-aos="fade" className="card">
                <img className="group-dp" src={group.img} alt="" />
                <h4 className="group-name">{group.name}</h4>
                <p className="group-info">&#40;{group.desc}&#41;</p>
              </div>
            </a>
          ) : (
            <div data-aos="fade" className="card" key={index}>
              <img className="group-dp" src={group.img} alt="" />
              <h4 className="group-name">{group.name}</h4>
              <p className="group-info">&#40;{group.desc}&#41;</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
