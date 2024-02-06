import { useState } from "react"
import MemberCard from "../components/MemberCard"

const InfoPage=()=>{

    return<div>
        <div>{}</div>
        <h4 >Members</h4>
        <div className="grid grid-cols-3 gap-5">

        
        {/* {[1,2,3,4,5,6,7,8,9].map((iteration)=>(


       
        ))}; */}
        <MemberCard/>
        
        </div>
    </div>
}

export default InfoPage