import Link from "next/link";
import Image from "next/image";
import {youtube} from "../../lib/config";

export default function HomeBanner() {
  return (
    <section className="h-sec h-banner h3-banner h-banner-1">
      <div className="page-width">
        <div className="box h-banner-ctn">
          <div className="h-banner-text">
            <div className="h-banner-title">

              <p>অফিসিয়াল ওয়েবসাইট</p>
              <h1>
                <span>ড. মুহাম্মদ সাইফুল্লাহ মাদানী</span>
              </h1>


            </div>

            <p>
              পবিত্র হাদিসে বর্ণিত আছে, ‘মা-বাবার পায়ের নিচে সন্তানের
              জান্নাত।’ এর মর্ম হলো, মা-বাবার সঙ্গে সদাচরণ ও তাদের সন্তুষ্ট
              করার মাধ্যমেই সন্তানরা জান্নাতের উপযুক্ত হবে। এ ক্ষেত্রে বিধান
              হলো, মা-বাবা সৎকর্মশীল হোক বা পাপী ও হত্যাকারী হোক, এমনকি
              কাফিরই হোক পবিত্র হাদিসে বর্ণিত আছে।
            </p>
            <p>
              এ ক্ষেত্রে বিধান
              হলো, মা-বাবা সৎকর্মশীল হোক বা পাপী ও হত্যাকারী হোক, এমনকি
              কাফিরই হোক পবিত্র হাদিসে বর্ণিত আছে, ‘মা-বাবার পায়ের নিচে সন্তানের
              জান্নাত।’ এর মর্ম হলো, মা-বাবার সঙ্গে সদাচরণ ও তাদের সন্তুষ্ট
              করার মাধ্যমেই সন্তানরা জান্নাতের উপযুক্ত হবে।
            </p>

            {/*<div className="h-banner-link">*/}
            {/*  <Link href="/contact/">*/}
            {/*    <a className="btn-r">যোগাযোগ</a>*/}
            {/*  </Link>*/}

            {/*  <Link href="/about/">*/}
            {/*    <a className="btn-r-rev">আমার সম্পর্কে</a>*/}
            {/*  </Link>*/}
            {/*</div>*/}

            <div className="row row-r">
              <div className="col col-r s12 l6">
                <div className="h3-cat-wrap">
                  <div className="h3-cat-card">
                    <Link href="/books/">
                      <a className="card card-r">
                        <i className="fas fa-book"></i>
                        <span>বই সমূহ</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col-r s12 l6">
                <div className="h3-cat-wrap">
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
            </div>



          </div>

          {/*<div className="h-banner-image">*/}
          {/*  <div className="banner-image">*/}
          {/*    <Image*/}
          {/*      src="/img/id/profile-02.png"*/}
          {/*      alt=""*/}
          {/*      layout="fill"*/}
          {/*      objectFit="cover"*/}
          {/*      objectPosition="center center"*/}
          {/*      loading="eager"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="opt_home_featured_right">
            <div className="opt_home_featured_image">
              <Image
                  src="/img/rsz_20210407_211234.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
