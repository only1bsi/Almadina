import React from 'react'
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { RiPrinterLine } from 'react-icons/ri';
import "./dashboard.css"

function Dashboard() {
  return (

    <div className="app_settings outlet">
  

   <div className="main-1">
      <div className="div">
        <div className="div-d-flex">
          <div className="link">
            <div className="text-wrapper"><FaUser /></div>
          </div>
          <div className="heading">85,246</div>
          <div className="text-wrapper-2">Orders</div>
        </div>
        <div className="div-2" />
        <div className="div-d-flex-2">
          <div className="div-wrapper">
            <div className="text-wrapper-3"><RiPrinterLine /></div>
          </div>
          <div className="heading-2">$96,147</div>
          <div className="text-wrapper-4">Income</div>
        </div>
        <div className="div-3" />
        <div className="div-d-flex-3">
          <div className="link-2">
            <div className="text-wrapper-5"><FaBell /></div>
          </div>
          <div className="heading-3">846</div>
          <div className="text-wrapper-6">Notifications</div>
        </div>
      </div>
    </div>

   <div className='middle-flex'>
    <div className="main-2">
   <div className="div-d-flex">
   <div className="div">
   <div className="heading">146</div>
   <div className="text-wrapper">Total Attendance</div>
   </div>
  
   </div>
   <div className="p-mb">
   <div className="text-wrapper-3">12.5%</div>
   <div className="from-last-month"> from last month</div>
   </div>
   <img className="div-chart" src="../graph1.jpg" />
   </div>


   <div className="main-4">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div-card-header">
            <div className="div-flex">
              <div className="heading-purchases">Expences</div>
              <div className="text-wrapper">Total Expences</div>
            </div>
          
          </div>
          <div className="div-card-body">
            <div className="image" />
          </div>
        </div>
      </div>
    </div>
    </div>



    <div className="main-5">
      <div className="div">
        <div className="div-d-flex">
          <div className="heading">7858</div>
          <div className="p-dash-lable">
            <div className="text-wrapper">
            <p>Translators</p>
            </div>
          </div>
        </div>
        <div className="p-mb">
          <div className="text-wrapper-3"><p>The standard chunk of Lorem Ipsum <br></br> chunk of Lorem Ipsum used since</p></div>
        </div>
      </div>
    </div>


<div className='main-3-6'>
   <div className="main-3">
      <div className="div">
        <div className="div-d-flex">
          <div className="heading">$65,129</div>
          <div className="p-dash-lable">
            <div className="text-wrapper"></div>
            <div className="text-wrapper-2">65.2%</div>
          </div>
        </div>
        <div className="p-mb">
          <div className="text-wrapper-3">Bugdget This Year</div>
        </div>
        <div className="div-mt">
          <div className="text-wrapper-4">$34,871 left to Goal</div>
          <div className="text-wrapper-5">78%</div>
          <div className="div-progress">
            <div className="div-progress-bar" />
          </div>
        </div>
      </div>
    </div>


    <div className="main-6">
      <div className="div">
        <div className="div-d-flex">
          <div className="heading">Our Vision</div>
        </div>
        <div className="p-mb">
          <div className="text-wrapper-3"><p>chunk of Lorem Ipsum used since the<br></br> chunk of Lorem Ipsum used since the;<br></br> chunk of Lorem Ipsum used since the<br></br> chunk of Lorem</p></div>
        </div>
      </div>
    </div>
    </div>




     </div>
  )
}

export default Dashboard


