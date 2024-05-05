import React from "react";
import { useState } from "react";
import hydTeam from "../assets/hyd__1_-removebg-preview.png";
import mumbaiTeam from "../assets/mumbai-removebg-preview.png";
import kolkataTeam from "../assets/Kolkata-Knight-Riders-Logo-removebg-preview.png";
import lucknowTeam from "../assets/Lucknow_Super_Giants_IPL_Logo.svg-removebg-preview.png";
import cheenaiTeam from "../assets/Original_Chennai_Super_Fun_Logo_PNG_-_SVG_File_Download_Free_Download-removebg-preview.png";
import panjabTeam from "../assets/PBKSoutline-removebg-preview.png";
import gtTeam from "../assets/png-transparent-gujarat-titans-logo-sports-cricket-teams-removebg-preview.png";
import rajsthanTeam from "../assets/Rajasthan-Royals-Logo-removebg-preview.png";
import delhiTeam from "../assets/delhi-removebg-preview.png";
import rcbTeam from "../assets/GJBQUvHW4AAlMhA-removebg-preview.png";
function CounterApp() {
  const [count, setCouter] = useState(0);

  function updateCounter() {
    setCouter(count + 1);
  }

  function removePoint() {
    if (count > 0) {
      setCouter(count - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-4 border w-fit p-10">
        
      <div className="flex flex-wrap gap-5 justify-center border p-20 ">
        {/* HYD */}
        <div className="p-10 ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']  text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-7">
          <img src={hydTeam} className="h-28" alt="" />
          <p className="font-semibold text-xl">Sunrisers Hyderabad</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>
     
        {/* mumbai */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
          <img src={mumbaiTeam} className="h-32" alt="" />
          <p className="font-semibold text-xl">Sunrisers Hyderabad </p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>

        {/* lucknow */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
          <img src={lucknowTeam} className="h-32" alt="" />
          <p className="font-semibold text-xl">Lucknow Supergiants</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>

        {/* kolkata */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
            <img src={kolkataTeam} className="h-32 w-52" alt="" />
          <p className="font-semibold text-xl">Kolkata Knight Riders</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>  
        {/* chennai */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
          <img src={cheenaiTeam} className="h-32 w-34" alt="" />
          <p className="font-semibold text-xl">Chennai Super Kings</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>

        {/* Rajsthan */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
          <img src={rajsthanTeam} className="h-32 w-34" alt="" />
          <p className="font-semibold text-xl">Rajasthan Royals </p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>
        {/* punjab */}        
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
          <img src={panjabTeam} className="h-44 w-34" alt="" />
          <p className="font-semibold text-xl">Punjab Kings</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>
        {/* GT */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
          <img src={gtTeam} className="h-44 w-34" alt="" />
          <p className="font-semibold text-xl">Gujarat Titans</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>
        {/* Delhi */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
            <img src={delhiTeam} className="h-26 w-32" alt="" />
          <p className="font-semibold text-xl">Delhi Capitals</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>
        {/* RCB */}
        <div className=" p-10 text-center shadow-xl hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex flex-col gap-5">
            <img src={rcbTeam} className="h-44 w-34" alt="" />
          <p className="font-semibold text-xl">Delhi Capitals</p>
          <button className="border p-1 rounded-sm shadow-xl">Add</button>
        </div>
        
      </div>

        <div className="flex gap-10">

        <div className="bg-orange-400 font-semibold p-10 text-center shadow-xl flex flex-col gap-5">
          <p className="font-semibold text-xl">Team 1 </p>
          <p className=" p-1 rounded-sm shadow-xl">Score</p>
          <p className=" p-1 rounded-sm shadow-xl">{}</p>
        </div>

        <div className="font-semibold bg-pink-400 p-10 text-center shadow-xl flex flex-col gap-5">
          <p className="font-semibold text-xl">Team 1 </p>
          <p className=" p-1 rounded-sm shadow-xl">Score</p>
          <p className="text-semibold p-1 rounded-sm shadow-xl">{}</p>
        </div>

        <div className="bg-green-400 p-10 font-semibold text-center shadow-xl flex flex-col gap-5">
          <p className="font-semibold text-xl">Team 1 </p>
          <p className=" p-1 rounded-sm shadow-xl">Score</p>
          <p className=" p-1 rounded-sm shadow-xl">{}</p>
        </div>

        

        </div>

      </div>
        
    </>
  );
}

export default CounterApp;
