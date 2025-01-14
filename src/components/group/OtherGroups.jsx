import communityImg from "../../asserts/images/group/main.jpg";
import fbImg from "../../asserts/images/group/fb.jpg";
import discordImg from "../../asserts/images/group/discord.jpg";

export default function OtherGroups() {
  return (
    <>
      <div className="fb groups">
        <h3 className="app-heading">FACEBOOK</h3>
        <div className="group-container">
          <a
            href="https://facebook.com/groups/pvxgaming/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={fbImg} alt="" />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">(Posting group)</p>
            </div>
          </a>
        </div>
      </div>

      <div className="discord groups">
        <h3 className="app-heading">DISCORD</h3>
        <div className="group-container">
          <a
            href="https://discord.gg/zMktzNzx9U"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img
                loading="lazy"
                className="group-dp"
                src={discordImg}
                alt=""
              />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">(Discord PVX group)</p>
            </div>
          </a>
        </div>
      </div>

      <div className="signal groups">
        <h3 className="app-heading">SIGNAL</h3>
        <div className="group-container">
          <a
            href="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img
                loading="lazy"
                className="group-dp"
                src={communityImg}
                alt=""
              />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">(Signal PVX group)</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
