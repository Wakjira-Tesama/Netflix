import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./../style/footer.css";
function Footer() {
  return (
    <div>
      <div className="footer_outer">
        <div className="footer_inner">
          <div className="footer_media">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_links">
            <ul>
              <li>Audio subtitles</li>
              <li>Zone de téléchargement</li>
              <li>Privacy</li>
              <li>certification</li>
            </ul>
            <ul>
              <li>descript Audio</li>
              <li>irréversible</li>
              <li>Awls</li>
            </ul>
            <ul>
              <li>carto </li>
              <li>Emplse </li>
              <li>Preformance </li>
            </ul>
            <ul>
              <li>Trajector</li>
              <li>Terminpe</li>
              <li>information</li>
            </ul>
          </div>
          <div className="footer_fitness">
            <button>Code page</button>
            <p>c 0000c aaa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
