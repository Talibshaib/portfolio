import React from 'react'
import style from "../styles/Home.module.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <section className={`${style.herosection}`}>
      <div className={style.infopart}>
        <h1>Talib Sheik</h1>
        <p> Myself Talib Sheik Studing Information Technology. I am eager to learn and grow both personally and professionally. I am passionate about technolgy and am actively seeking opportunities to get involve and make a difference . In future I hope to use my knowledge to make a poositive impact in the tech. I am always open to new experiences and am exicted to see where my destiny will take me..</p>
        <div className={style.socail_icon}>
          <a href="https://instagram.com/talibshaib"><InstagramIcon /></a>
          <a href="https://www.linkedin.com/in/talib-sheikh-385a85251"><LinkedInIcon /></a>
          <a href="facebook"><FacebookIcon /></a>
          <a href="twitter"><TwitterIcon /></a>
        </div>
        {/* <a href=""></a> */}
        <button className={style.downlaodbtn}>Download resume</button>
      </div>
      <div className={style.img}>
        <img
          src="/talib.jpg"
        />
      </div>
    </section>

  )
}
