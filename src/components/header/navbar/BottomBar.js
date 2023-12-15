import React from 'react'
import './css/bottomnavbar.css'
function BottomBar() {

  const menuOpen = () => {
    const wraper = document.getElementById('wraper')
    wraper.classList.remove('hidden')
  }
  const menuClose = () => {
    const wraper = document.getElementById('wraper')
    wraper.classList.add('hidden')
  }

  return (
    <div className='shadow'>
      {/* navbar in md  */}
      <div className='hidden md:block'>
        <div className="container mx-auto flex flex-row">
          <div className="p-3 cursor-pointer item">
            <button className='flex flex-row items-center'>
            گروه های محصولات
            <i className='fa fa-chevron-down p-1'></i>
            </button>
          </div>
          <div className="p-3 cursor-pointer item flex flex-row items-center">
            <button>
              درباره ما
            </button>
          </div>
          <div className="p-3 cursor-pointer item flex flex-row items-center">
            <button>
            صفحات فروشگاه
            <i className='fa fa-chevron-down p-1'></i>
            </button>
          </div>
          <div className="p-3 cursor-pointer item flex flex-row items-center">
            <button>
            تماس با فروشگاه
            <i className='fa fa-chevron-down p-1'></i>
            </button>
          </div>
          <div className="p-3 cursor-pointer item flex flex-row items-center">
            <button>
            بلاگ اموزشی
            <i className='fa fa-chevron-down p-1'></i>
            </button>
          </div>
          <div className="p-3 cursor-pointer item flex flex-row items-center">
            <button>
            سایر صفحات
            <i className='fa fa-chevron-down p-1'></i>
            </button>
          </div>
          <div className="p-3 cursor-pointer item flex flex-row items-center">
            <button>
            پروفایل کاربری
            <i className='fa fa-chevron-down p-1'></i>
            </button>
          </div>
        </div>
      </div>
      {/* menu icon */}
      <div className='p-2  md:hidden text-center'>
        <i onClick={menuOpen} className='fa fa-bars p-2 cursor-pointer text-2xl'></i>
        <a href="#" className='p-3 text-xl'>منوی فروشگاه</a>
      </div>
      
 
    {/* wraper */}
      <div className='hidden' id='wraper' >
        <div className='bg-white' id='width-menu'>
          <div className='md:hidden'>
          <i onClick={menuClose} className='fa fa-close text-3xl p-3'></i>
          </div>

           <div className="w-full p-1">
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between" id='active'>
              <a href="#">گروه محصولات</a>
              <i className='fa fa-plus'></i>
            </div>
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between">
              <a href="#">درباره ما</a>
            </div>
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between">
              <a href="#">صفحات فروشگاه</a>
              <i className='fa fa-plus'></i>
            </div>
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between">
             <a href="#">تماس با ما</a>
             <i className='fa fa-plus'></i> 
            </div>
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between">
              <a href="#">بلاگ اموزشی</a>
              <i className='fa fa-plus'></i>
            </div>
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between">
              <a href="#">سایر صفحات</a>
              <i className='fa fa-plus'></i>
            </div>
            <div className="shadow p-3 border border-gray-400 flex flex-row items-center justify-between">
              <a href="#">پروفایل کاربری</a>
              <i className='fa fa-plus'></i>
            </div>
           </div>

        </div>
      </div>

  </div>
  )
}

export default BottomBar
