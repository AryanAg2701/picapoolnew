import styles from './PicapoolLandingPage.module.css';
import image1 from './images/image1.png';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.svg';
import image9 from './images/image9.png';
import image9a from './images/image9(1).png';
import image9b from './images/image9(2).png';
import image10 from './images/image10.png';
import image11 from './images/image11.png';
import image12 from './images/image12.png';
import image12a from './images/image12(1).png';
import image12b from './images/image12(2).png';
import image13 from './images/image13.png';
import image13a from './images/image13(1).png';
import image13b from './images/image13(2).png';
import image14 from './images/image14.png';
import image15 from './images/image15.svg';
import image16 from './images/image16.png';
import image17 from './images/image17.svg';
import image18 from './images/image18.svg';
import image19 from './images/image19.svg';
import image20 from './images/image20.svg';
import image21 from './images/image21.png';
import image22 from './images/image22.svg';
import image23 from './images/image23.png';
import image24 from './images/image24.svg';
import image25 from './images/image25.png';
import image27 from './images/image27.svg';
import image28 from './images/image28.svg';
import image29 from './images/image29.svg';
import image30 from './images/image30.png';
import image31 from './images/image31.png';
import image32 from './images/image32.png';
import image32a from './images/image32(1).png';
import image33 from './images/image33.svg';
import image34 from './images/image34.svg';
import image35 from './images/image35.svg';
import image36 from './images/image36.svg';
import image37 from './images/image37.svg';
import i1 from "./images/1.svg";
import i2 from "./images/2.svg";
import i3 from "./images/3.svg";
import dash from "./images/dashes.png";
import group from "./images/Group 320.png"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about';  
import Explore from './explore';  
import Partners from './partners';  
import Pica from './pica';  






const PicapoolLandingPage:React.FC = () => {
  return (
    <div className="bg-[var(--bg-white,#f7f7f7)] overflow-hidden flex flex-col items-center">
      <div className=" bg-[var(--bg-white,#f7f7f7)] shadow-md self-stretch flex flex-wrap justify-between gap-5 px-20 py-5 w-full md:max-w-full md:px-20">
        <div className="flex gap-[14px]">
          <img loading="lazy" src={image1} className="aspect-ratio-1 object-contain object-center w-[46px]" />
          <img loading="lazy" src={image2} className="aspect-ratio-[4.08] object-contain object-center w-[106px] max-w-full mx-auto mb-0 mt-0 fill-primaryOrange" />
        </div>
        <div className="flex gap-x-[50px] gap-y-[40px] flex-wrap mx-auto my-0 font-[poppins,sans-serif]">

          <div className={styles.div4}>
            <div className={styles.div5}>
              <div className={styles.div6}>
                <img loading="lazy" src={image3} className={styles.img3} />
<Router>
            <nav>
                <>
                    <a href="/" className={styles.home2}>Home</a>
                    <a href="/about" className={styles.about}>About</a>
                    <a href="/explore" className={styles.explore}>Explore</a>
                    <a href="/partners" className={styles.partner}>Partners</a>
                    <a  href="./pica"className={styles.picathon}>Picathon</a>



                </>
            </nav>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/partners" element={<Partners/>} />
                <Route path="/pica" element={<Pica/>} />

            </Routes>
            </Router>
              <div className={styles.live}>Live</div>
              </div>
              <div className={styles.div7}>
              </div>
            </div>

            <img loading="lazy" src={group} className={styles.group}></img>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-14 ml-3.75">
        <div className={styles.div9}>
          <div className={styles.column}>
            <div className={styles.div10}>
            <div className={styles.save}>Save More with</div>

              <div className={styles.picapool}>Picapool</div>
              <div className={styles.poolOffersForCabsPizzasClothesAndMore}>
                Pool offers for cabs, pizzas, clothes, and more...
              </div>
              <div className={styles.div11}>
                <div className={styles.downloadTheAppAndStartPooling}>
                  Download the App and start pooling :)
                </div>
                <div className={styles.div12}>
                  <div className={styles.div13}>
                    <img loading="lazy" src={image4} className={styles.img4} />
                  </div>
                  <div className={styles.div14}>
                    <img loading="lazy" src={image5} className={styles.img5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column2}>
            <img loading="lazy" src={image6} className={styles.img6} />
            <img loading="lazy" src={image7} className={styles.img7} />

          </div>
        </div>
      </div>
      <div className={styles.div15}>
        
        <div className={styles.whyPicapool}>
        <img loading="lazy" src={image8} className={styles.img8} />
          <span style={{ color: 'rgba(30,30,30,1)', width: '460px' }}>Why</span> Picapool ?
          <img loading="lazy" src={image8} className={styles.img8} />
        </div>
        
      </div>
      <div className={styles.div16}>
        <div className={styles.div17}>
          <div className={styles.column3}>
            <img loading="lazy" src={image9} className={styles.img9} />
            <img loading="lazy" src={image9a} className={styles.img9a} />
            <img loading="lazy" src={image9b} className={styles.img9b} />
          </div>
          <div className={styles.column4}>
            <div className={styles.div18}>
              <div className={styles.div19} />
              <div className={styles.div20}>
                <div className={styles.div21}>
                  <div className={styles.shareARideAndSave}>Share a Ride and Save!</div>
                  <div className={styles.shareYourJourneyCutYourCostsFindFellowTravelersHeadingYourWayEasilyConnectWithOthersToSplitTheFareAndMakeCommutingFun}>
                    Share your journey, cut your costs! Find fellow travelers heading your way.
                    <br />
                    <br />
                    Easily connect with others to split the fare and make commuting fun.
                  </div>
                </div>
                <img loading="lazy" src={image10} className={styles.img10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div22}>
        <div className={styles.div23}>
          <div className={styles.column5}>
            <div className={styles.div24}>
              <div className={styles.div25}>
                <div className={styles.div26} />
                <div className={styles.sliceThePriceOfYourPizza}>Slice the Price of Your Pizza!</div>
              </div>
              <div className={styles.div27}>
                <div className={styles.doubleTheToppingsHalfThePricePoolYourPizzaOrderAndEnjoyMoreTeamUpWithNearbyPizzaLoversForADeliciousDeal}>
                  Double the toppings, half the price! Pool your pizza order and enjoy more.
                  <br />
                  <br />
                  Team up with nearby pizza lovers for a delicious deal.
                </div>
                <img loading="lazy" src={image11} className={styles.img11} />
              </div>
            </div>
          </div>
          <div className={styles.column6}>
            <img loading="lazy" src={image12} className={styles.img12} />
            <img loading="lazy" src={image12a} className={styles.img12a} />
            <img loading="lazy" src={image12b} className={styles.img12b} />
          </div>
        </div>
      </div>
      <div className={styles.div28}>
        <div className={styles.div29}>
          <div className={styles.column7}>
            <img loading="lazy" src={image13} className={styles.img13} />
            <img loading="lazy" src={image13b} className={styles.img13b}/>
            <img loading="lazy" src={image13a} className={styles.img13a} />
          </div>
          <div className={styles.column8}>
            <div className={styles.div30}>
              <div className={styles.div31} />
              <div className={styles.div32}>
                <div className={styles.createYourOwnPool}>Create Your Own Pool</div>
                <div className={styles.gotAGreatDealSnapAPictureAndFindSomeoneNearbyToShareItWithWhetherItsASaleASpecialOfferOrAUniqueFindCreateAPoolAndEnjoyTheSavingsTogether}>
                  Got a great deal? Snap a picture and find someone nearby to share it with.
                  <br />
                  <br />
                  Whether it's a sale, a special offer, or a unique find, create a pool and enjoy the savings together.
                </div>
                <div className={styles.div33}>
                  <img loading="lazy" src={image14} className={styles.img14} />
                  <div className={styles.div34}>
                    <img loading="lazy" src={image15} className={styles.img15} />
                    <img loading="lazy" src={image16} className={styles.img16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div35}>
        <img loading="lazy" src={image17} className={styles.img17} />
        <div className={styles.div36}>
          <div className={styles.div37}>
            <div className={styles.andManyMore}>And many More</div>
            <img loading="lazy" src={image18} className={styles.img18} />
          </div>
        </div>
        <img loading="lazy" src={image19} className={styles.img19} />
      </div>
      <div className={styles.howDoesItWork}>
        <span style={{ color: 'rgba(30,30,30,1)' }}>How does it </span>Work?
      </div>
      <img loading='lazy' src={dash} className={styles.dash}/>

      <div className={styles.div38}>
        <img loading="lazy" src={i1} className={styles.img} />
        <img loading="lazy" src={i2} className={styles.img} />
        <img loading="lazy" src={i3} className={styles.img} />
      </div>
      <div className={styles.div39}>
        <div className={styles.div40}>
          <div className={styles.column9}>
            <div className={styles.div41}>
              <img loading="lazy" src={image20} className={styles.img20} />
              <div className={styles.chooseADeal}>
                CHOOSE
                <br />A DEAL
              </div>
              <div className={styles.selectFromAVarietyOfPoolingOptions}>
                Select from a variety of pooling options
              </div>
              <img loading="lazy" src={image21} className={styles.img21} />
            </div>
          </div>
          <div className={styles.column10}>
            <div className={styles.div42}>
              <img loading="lazy" src={image22} className={styles.img22} />
              <div className={styles.joinAPool}>
                JOIN A
                <br /> POOL
              </div>
              <div className={styles.connectWithLikeMindedSaversNearby}>
                Connect with like minded savers nearby
              </div>
              <img loading="lazy" src={image23} className={styles.img23} />
            </div>
          </div>
          <div className={styles.column11}>
            <div className={styles.div43}>
              <img loading="lazy" src={image24} className={styles.img24} />
              <div className={styles.enjoyRewards}>
                Enjoy
                <br /> rewards
              </div>
              <div className={styles.completeTheDealAndEnjoyYourSavings}>
                Complete the deal and enjoy your savings!
              </div>
              <img loading="lazy" src={image25} className={styles.img25} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoGuide}>
        <span style={{ color: 'rgba(30,30,30,1)' }}>Video </span>Guide
      </div>
      <iframe loading="lazy" src="https://www.youtube.com/embed/VIDEO_ID"  className={styles.img26} ></iframe>
      <div className={styles.weAre}>We are</div>
      <div className={styles.div44}>
        <div className={styles.suzukiInnovationBootcampWinner}>
          <span style={{ color: 'rgba(19,50,130,1)' }}>Suzuki</span> Innovation Bootcamp
          <span style={{ color: 'rgba(255,141,65,1)' }}> Winner</span>
        </div>
        <img loading="lazy" src={image27} className={styles.img27} />
      </div>
      <div className={styles.div45}>
        <div className={styles.div46}>
          <div className={styles.column}>
            <div className={styles.div47}>
              <div className={styles.winningTheSuzukiInnovationBootcampValidatedOurUniqueApproachThisPrestigiousRecognitionReinforcedOurBeliefInUsingTechnologyToEmpowerUsersItShowcasedOurPotentialToRevolutionizeTraditionalSavingsMethodsOurInnovativeApproachIsNowIndustryRecognizedAndCelebrated}>
                Winning the Suzuki Innovation Bootcamp validated our unique approach.
                <br />
                <br />
                This prestigious recognition reinforced our belief in using technology to empower users.
                <br />
                <br />
                It showcased our potential to revolutionize traditional savings methods.
                <br />
                <br />
                Our innovative approach is now industry-recognized and celebrated.
              </div>
              <div className={styles.div48}>
                <div className={styles.readMore}>Read More</div>
                <img loading="lazy" src={image28} className={styles.img28} />
              </div>
            </div>
          </div>
          <div className={styles.column12}>
            <div className={styles.screenshot202407121118593}>
              <div className={styles.div49}>
                <img loading="lazy" src={image29} className={styles.img29} />
                <div className={styles.relevantImage}>Relevant image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div50}>
        <div className={styles.div51}>
          <div className={styles.column}>
            <div className={styles.div52}>
              <div className={styles.getStartedWithPicapool}>Get started with Picapool</div>
              <div className={styles.downloadTheAppTodayAndStartSaving}>
                Download the App Today and Start Saving!
              </div>
              <div className={styles.div53}>
                <div className={styles.div54}>
                  <img loading="lazy" src={image30} className={styles.img30} />
                </div>
                <div className={styles.div55}>
                  <img loading="lazy" src={image31} className={styles.img31} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column13}>
            <img loading="lazy" src={image32} className={styles.img32} />
            <img loading="lazy" src={image32a} className={styles.img32a} />
          </div>
        </div>
      </div>
      <div className={styles.div56}>
        <div className={styles.div57}>
          <div className={styles.div58}>
            <div className={styles.div59}>
              <div className={styles.column14}>
                <div className={styles.div60}>
                  <div className={styles.div61}>
                    <img loading="lazy" src={image1} className={styles.img} />
                    <img loading="lazy" src={image33} className={styles.img33} />
                  </div>
                  <div className={styles.redefiningTheArtOfSaving}>Redefining the Art of saving</div>
                </div>
              </div>
              <div className={styles.column15}>
                <div className={styles.div62}>
                  <div className={styles.contactUs}>Contact us!</div>
                  <div className={styles.div63}>
                    <img loading="lazy" src={image34} className={styles.img34} />
                    <div className={styles.phoneNumber}>+91 8917602924</div>
                  </div>
                  <div className={styles.div64}>
                    <img loading="lazy" src={image35} className={styles.img35} />
                    <div className={styles.emailAddress}>pranadipan@picapool.com</div>
                  </div>
                </div>
              </div>
              <div className={styles.column16}>
                <div className={styles.div65}>
                  <div className={styles.followUs}>Follow us!</div>
                  <div className={styles.div66}>
                    <img loading="lazy" src={image36} className={styles.img36} />
                    <img loading="lazy" src={image37} className={styles.img37} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div67}>
            <div className={styles.policyConditions}>Policy & Conditions</div>
            <div className={styles.copyright}>
              © 2024 Picapool, Kandi, Sangareddy, Telangana, India. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicapoolLandingPage;
