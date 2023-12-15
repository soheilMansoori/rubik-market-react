import React from 'react'
import './css/topbar.css'
function TopBar() {
  return (
    <>
    <div id="bg-topbar">
        
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
            <div>
                <ul className='flex flex-row'>
                    <li className="p-3">صفحه نخست</li>
                    <li className="p-3">درباره ما</li>
                    <li className="p-3">تماس باما</li>
                </ul>
            </div>
            <div>
                <p className="">تلفن مشاوره و فروش: 09109336202</p>
            </div>
        </div>

    </div>
    </>
    )
}

export default TopBar
