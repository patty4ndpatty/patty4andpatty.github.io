import './Home.css'

function Home() {
    return(
        <section class="home section" id="home">
            <div class="home_container container grid">
                <div class="home_content grid">
                    <div class="home_social">
                        <a href="https://www.facebook.com/profile.php?id=100007749335246" target="_blank" class="home_social-icon">
                            <i class="uil uil-facebook"></i>
                        </a>
                        <a href="https://github.com/patty49032" target="_blank" class="home_social-icon">
                            <i class="uil uil-github"></i>
                        </a>
                    </div>
                    <div class="home_img">
                        <svg class="home_blob" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha">
                                <ellipse stroke-width="0" stroke="#000" ry="94" rx="94" id="svg_2" cy="94" cx="100" fill="#e05785"/>
                            </mask>
                            <g mask="url(#mask0)">
                             <title>Layer 1</title>
                             <ellipse stroke-width="0" stroke="#000" ry="94" rx="94" id="svg_2" cy="94" cx="100" fill="#e05785"/>
                             {/* <image class="home_blob-img" x="" y="2" xlink:href="assets/img/profile2.png"/> */}
                            </g>
                        </svg>
                    </div>
                    <div class="home_data">
                        <h1 class="home_title">Pochcharapon Konpian</h1>
                        <h3 class="home_subtitle">Computer and Information Science KKUNKC</h3>
                        <p class="home_description">นักศึกษาระดับปริญญาตรี ชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์และสารสนเทศ คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home