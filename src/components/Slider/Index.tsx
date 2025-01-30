'use client';
import React from 'react';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/app/page.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '../Button';

export default () => {
  return (
    <div>
      <div className={styles.container}>
        <h4 className={styles.sliderHeader}>What they&apos;ve said</h4>
        <Swiper
          className={styles.swiper}
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // 1024: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className={styles.slider}>
              <div className={styles.sliderAvatar}>
                <img src='avatar-anisha.png' alt='' />
              </div>
              <div className={styles.sliderText}>
                <h6>Anisha Li</h6>
                <p>
                  &quot;Manage has supercharged our team&apos;s workflow. The
                  ability to maintain visibility on larger milestones at all
                  times keeps everyone motivated.&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider}>
              <div className={styles.sliderAvatar}>
                <img src='avatar-ali.png' alt='' />
              </div>
              <div className={styles.sliderText}>
                <h6>Ali Bravo</h6>
                <p>
                  &quot;We have been able to cancel so many other subscriptions
                  since using Manage. There is no more cross-channel confusion
                  and everyone is much more focused.&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider}>
              <div className={styles.sliderAvatar}>
                <img src='avatar-richard.png' alt='' />
              </div>
              <div className={styles.sliderText}>
                <h6>Richard Watts</h6>
                <p>
                  &quot;Manage allows us to provide structure and process. It
                  keeps us organized and focused. I can&apos;t stop recommending
                  them to everyone I talk to!&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider}>
              <div className={styles.sliderAvatar}>
                <img src='avatar-shanai.png' alt='' />
              </div>
              <div className={styles.sliderText}>
                <h6>Shanai Gough</h6>
                <p>
                  &quot;Their software allows us to track, manage and
                  collaborate on our projects from anywhere. It keeps the whole
                  team in-sync without being intrusive.&quot;
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.center}>
        <Button />
      </div>
    </div>
  );
};
