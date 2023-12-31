import React, { useRef, useState, useEffect } from 'react'
import e from '../scss/event.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

function Event(props) {
  return (
    <section id={props.id} className={`${e.section}`}>
        <div className={`${e.titlename}`}>
            <p>이벤트 소식</p>
        </div>
        <Swiper 
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        slidesPerView={1.2}
        spaceBetween={10}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
            576:{
                slidesPerView: 1.5,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }}
        className={`mySwiper ${e.eventbox} container-lg d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center`}>
            {
                props.info.contentsdb.event.list.map((v, i) => {
                    return(
                        <SwiperSlide className={`col-md-4`} key={i}>
                            <li className={`${e.eventlist} d-sm-flex align-itmes-center`}>
                                <div className='eventbigbox'>
                                    <div className='position-relative'>
                                        <div className={`${v.imgcls}`}>
                                            <a href=""></a>
                                        </div>
                                        <div className='eventmore'>
                                            <a href="">
                                                <p>더 알아보기</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${v.textcls} ${e.textbox}`}>
                                        <div className={`${e.textbigbox}`}>
                                            {v.title.split("<br>").map((br, i) => {
                                                const emSplit = br.split("<em>");
                                                return (
                                                    <p key={i} className={"title" + i}>
                                                        {emSplit.map((v, idx) => {
                                                            if (idx % 2 === 0) {
                                                                return v; // 짝수 인덱스는 <strong> 태그 외의 텍스트
                                                            } else {
                                                                return <em key={idx}>{v}</em>; // 홀수 인덱스는 <strong> 태그 내부의 텍스트
                                                            }
                                                        })}
                                                    </p>
                                                );
                            
                            })}
                                        </div>
                                    </div>
                                </div>
                                
                            </li>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Event