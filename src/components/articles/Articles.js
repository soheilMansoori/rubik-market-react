import React from 'react'
import ArticlesCard from '../card/ArticlesCard'
import "./articles.css"
function Articles() {
  return (
    <>
    <div className='container mx-auto p-5'>
      <div className='text-center text-xl'>جدیدترین مقالات آموزشی</div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10'>
        <ArticlesCard
        imgSrc = './imgs/articles/post100.jpg'
        uploadDay = 'ارسال شده در 30 خرداد 1400'
        tiltle = "بررسی آیفون 12 پرو مکس اپل"
        description = "آیفون ۱۲ پرو مکس با ابعاد غول‌پیکر، دوربین توانمندتر و باتری حجمیش، تمام‌عیارترین پرچم‌دار کنونی اپل به‌حساب می‌آید." 
        />

        <ArticlesCard
        imgSrc = './imgs/articles/post101.jpg'
        uploadDay = 'ارسال شده در 30 شهریور 1401'
        tiltle = "سامسونگ گلکسی S21 اولترا 5G"
        description = "سامسونگ برای گوشی پرچم‌دارش، یعنی گلکسی S21 اولترا 5G، علاوه‌بر رنگ‌های قبلی، رنگ جدید سرمه‌ای را معرفی کرد." 
        />

        <ArticlesCard
        imgSrc = './imgs/articles/post102.jpg'
        uploadDay = 'ارسال شده در 4 آٔذر 1399'
        tiltle = "دریافت گواهی بلوتوث گلکسی A03s سامسونگ"
        description = "ماه گذشته، برای اولین‌بار اطلاعاتی از گلکسی A03s فاش شد و اکنون با دریافت گواهی بلوتوث، به زمان رونمایی این گوشی نزدیک شده‌ایم." 
        />

      </div>
    </div>
    </>
  )
}

export default Articles
