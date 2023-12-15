import React from 'react'

function Footer() {
  return (
    <>
    <hr />
    <footer className='container mx-auto p-5'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center bg-white mt-5'>
        <div className=''>
          <h3 className='text-xl'>دسترسی سریع</h3>
          <ul>
            <li>بلاگ آموزشی</li>
            <li>راهنمای خرید</li>
            <li>شیوه های پرداخت</li>
            <li>پیگیری سفارش</li>
            <li>سوالات متداول</li>
            <li>درباره ما</li>
            <li>تماس باما</li>
          </ul>
        </div>
        <div>
         <h3 className='text-xl'>گروه های محصولات</h3> 
          <ul className="">
              <li>تجهیزات کامپیوتر</li>
              <li>گوشی موبایل</li>
              <li>جانبی موبایل</li>
              <li>ساعت هوشمند</li>
              <li>جانبی کامپیوتر</li>
              <li>دوربین</li>
              <li>لپتاپ</li>
            </ul>
        </div>
        <div>
         <h3 className='text-xl'>ناحیه کاربری</h3> 
          <ul className="">
              <li>ورود به سایت</li>
              <li>عضویت در سایت</li>
              <li>بازیابی رمز عبور</li>
              <li>سبد خرید</li>
              <li>پیش فاکتور</li>
            </ul>
        </div>
        {/* <hr /> */}
        <div className='col-span-2 sm:col-span-3 md:col-span-3  mt-5 md:mt-0'>
          <div className="flex flex-row items-center justify-center my-3">
            <img src="./imgs/logo/logo.png" alt="logo" className='' />
            <span className=''>روبیک مارکت</span>
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className='bg-gray-300 text-center mt-5 p-3'>
            <div>7 روز هفته، 24 ساعت شبانه روز</div>
            <div>پاسخگوی شما هستیم</div>
            <div>09351234567</div>
          </div>
        </div>
      </div>


      <div className=''></div>
    </footer>
    </>
  )
}

export default Footer
