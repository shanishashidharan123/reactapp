// import { useState, useEffect } from "react";
// import ReactDOM from 'react-dom/client';

function SSHdr() {
  const togglebtn = () => {
    var ssbtn = document.getElementById("Snew_hdr1");
    ssbtn?.classList.toggle("sshow");
  }

  // var bgclass = document.getElementById("Bganim");
  // var bgclassname = bgclass?.className;
  // var bgdisplay = bgclass?.style.display;

  // const hide = () => {
  //   if (bgclassname = "fade") {
  //     bgdisplay = "none";
  //   }
  // }
  // const bganim = () => {
  //   bgclassname = "fade";
  //   setInterval(hide, 700);
  // }

  // const [classy] = useState("");

  // useEffect(() => {
  //   if(classy===""){
  //     bganim();
  //   }
  // });

  

  return (
    <>
      <div className="ss_container">
        <p><span className="algn_LEFT atop"><a href="../about_ss.html">SHANI SHASHIDHARAN</a></span>
          <button className="atop2 algn_RIGHT" id="ssTG1" onClick={togglebtn}><span>&#8212;<br />
            &#8212;<br />
            &#8212;</span></button>
        </p>
        <div id="ss_menu1">
          <ul>
            <li><a href="../about_ss.html">ABOUT</a></li>
            <li><a href="../reactapp/">PRODUCTS</a></li>
            <li><a href="../works_ss.html">WORKS</a></li>
            <li><a href="../services_ss.html">SERVICES</a></li>
            <li><a href="../team_ss.html">TEAM</a></li>
            <li><a href="../contact_ss.html">CONTACT</a></li>
            <li><a href="../oldmug/CSNI/index.html" target="_blank" rel="noreferrer nofollow">HTML 4.01 Transitional doctype website - Cosmeticsurgerynagpurindia </a></li>
            <li><a href="../oldmug/Maldives2india4surgery/" target="_blank" rel="noreferrer nofollow">XHTML 1.0 Transitional doctype webpage - Maldives2india4surgery</a></li>
            <li><a href="../aesthetic_dentistry" target="_blank" rel="noreferrer nofollow">HTML 4.01 Transitional doctype webpage - Aesthetic Dentistry India</a></li>
            <li><a href="../gamma_knife" target="_blank" rel="noreferrer nofollow">HTML 5.0 doctype webpage - Gamma Knife Surgery India</a></li>
          </ul>
        </div>
      </div>
    </>
  )
};

function Ftrss() {
  return (
    <>
      <footer className="Snew_footer">
        <div className="ss_container">
          <p className="Snew_footer-copywrite"> Author - SHANI SHASHIDHARAN 21 May, 2022
          </p>
          <address>
            <p className="Snew_footer-address">Aswathy, Umayanalloor P. O, Perayam, Kollam, Kerala, India, PIN: 691589</p>
          </address>
          <p className="Snew_footer-email"> <a href="mailto:shanishashidharan@hotmail.com">shanishashidharan@hotmail.com</a> | <a href="../documents/RESUME_shani.pdf" title="Download CV">Curriculum Vitae</a> | <a href="../documents/Profile.pdf" title="Download Profile for Marraige">Personal Profile</a></p>
          <p className="Snew_footer-address" style={{fontSize: "11px"}}><a href="../index.html">Home</a> | <a href="../privacy.html">Privacy Policy</a> | <a href="../terms.html">Terms and conditions</a> | <a href="../disclaimer.html">Disclaimer</a></p>
      </div>
    </footer>
    </>
  )
}

export { SSHdr, Ftrss };
