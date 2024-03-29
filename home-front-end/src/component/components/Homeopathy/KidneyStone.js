import React from 'react'
import './KidneyStone.css'
import { Description } from '@mui/icons-material'
// import { flushSync } from 'react-dom'

export default function FKidneyStone() {
    let des = `<p><span style="font-size: 32px">Heart Problems</span><br></p><div class="se-component se-image-container __se__float-none"><figure><img src="https://d3t5ai5vcxyqte.cloudfront.net/media/fwlqhcy.jpg" alt="" data-rotate="" data-proportion="true" data-size="425px,239px" data-align="none" data-file-name="fwlqhcy.jpg" data-file-size="0" origin-size="1280,720" data-origin="," style="width: 425px; height: 239px;"></figure></div><p>​<span style="color: rgb(0, 0, 0);font-size: 15px;background-color: transparent">Despite having a chronic cardiac condition, you can live a healthy, happy life if you have the right team in place, the&nbsp;<em>right medications and devices&nbsp;</em>prescribed as needed, and the right lifestyle changes.&nbsp;</span></p><p style="text-align: left"><span style="background-color: transparent">A chronic cardiac condition is usually caused by a diseased or damaged heart. Some</span><em>common problems</em><span style="background-color: transparent">are:</span></p><ul><li><span style="background-color: transparent">Coronary artery disease (CAD)</span></li><li><span style="background-color: transparent">Heart attack</span></li><li><span style="background-color: transparent">High blood pressure</span></li><li><span style="background-color: transparent">Valve disease</span></li><li><span style="background-color: transparent">Cardiomyopathy</span></li></ul><p>​<span style="color: rgb(0, 0, 0);font-size: 15px">A chronic cardiac condition's&nbsp;<em>symptoms&nbsp;</em><span style="background-color: transparent">can range from mild to severe and vary from person to person.&nbsp;Symptoms can appear suddenly or gradually, depending on the cause. A very mild condition may not have any visible symptoms at all. It is critical to recognize the signs as soon as they appear and to treat the condition as soon as possible with the assistance of your cardiac healthcare team. Treatment differs from one patient to the next.&nbsp;</span></span></p><p>​<br></p><p><strong>OUR CARDIAC HEALTHCARE TEAM WILL DETERMINE THE BEST TREATMENT PLAN FOR YOU.</strong></p><div style="text-align: center !important"><br></div><p><span style="color: rgb(0, 0, 0);font-size: 15px;background-color: transparent">.&nbsp;</span>​<br></p>`
    return (
            
            <div>
                <div dangerouslySetInnerHTML={{ __html: des }} />

            </div>
    )
}
