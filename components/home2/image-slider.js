import { useRef } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ImageSliderCard from "../card/slide1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import { youtube } from "../../lib/config";

export default function HomeImageSlider({ images }) {
  const slider = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    cssEase: "ease",
    mobileFirst: false,
    fade: true,
    dotsClass: "opt_image_dots",
  };

  return (
    <section className="h-sec opt_home_image">
      <div className="page-width">
        <div className="box">
          <div className="row row-r">
            <div className="col col-r s12 l9">
              <div className="opt_image_slider_wrap">
                <Slider className="opt_image_slider" {...settings} ref={slider}>
                  {images &&
                    images.length &&
                    images.map((slide) => (
                      <ImageSliderCard key={slide.id} slide={slide} />
                    ))}
                </Slider>

                <div className="opt_slider_arrow opt_home_image_slider_arrow">
                  <button
                    className="opt_slider_prev"
                    onClick={() => slider.current.slickPrev()}
                  >
                    <KeyboardArrowLeft />
                  </button>
                  <button
                    className="opt_slider_next"
                    onClick={() => slider.current.slickNext()}
                  >
                    <KeyboardArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col col-r s12 l3">
              {/*<div className="opt_image_right">*/}
              {/*  <h2>আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন</h2>*/}
              {/*  <p>*/}
              {/*    আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে*/}
              {/*    অনুগ্রহ করে নিচের ফর্ম*/}
              {/*  </p>*/}
              {/*  <p>*/}
              {/*    আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে*/}
              {/*    অনুগ্রহ করে নিচের ফর্ম*/}
              {/*  </p>*/}
              {/*</div>*/}

              <div className="h3-post-right">
                {/*<div className="h3-right-title">ক্যাটেগরি</div>*/}

                <div className="h3-right-text">
                  আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে
                  অনুগ্রহ করে নিচের ফর্ম আপনার আপনার আপনার
                  <div className="h3-cat-wrap">
                    <div className="h3-cat-card">
                      <Link href={`/lectures/${youtube.uploadPlaylistID}`}>
                        <a className="card card-r">
                          <i className="fas fa-photo-video"></i>
                          <span>লেকচার</span>
                        </a>
                      </Link>
                    </div>

                    <div className="h3-cat-card">
                      <Link href="/books/">
                        <a className="card card-r">
                          <i className="fas fa-book"></i>
                          <span>বই সমূহ</span>
                        </a>
                      </Link>
                    </div>

                    <div className="h3-cat-card">
                      <Link href="/articles/">
                        <a className="card card-r">
                          <i className="fas fa-book"></i>
                          <span>প্রবন্ধ সমূহ</span>
                        </a>
                      </Link>
                    </div>

                    <div className="h3-cat-card">
                      <Link href="/research-papers/">
                        <a className="card card-r">
                          <i className="far fa-file-alt"></i>
                          <span>রিসার্স পেপারস</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/*<div className="h3-right-title">আমাদের সম্পর্কে</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
