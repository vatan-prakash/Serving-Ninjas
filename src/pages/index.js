import Navbar from "@/components/Navbar/Navbar";
// import Services from "./services";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState(1);
  const arr = [
    {
      title: "Book a Ninja",
      img: "/meds.png",
      services: [
        "Urgent Medicines",
        "Urgent Prinouts",
        "Drop to any destinations",
      ],
    },
    { title: "Hire a Medical agent", img: "/care.jpeg", services: [] },
    {
      title: "Book a ride",
      img: "/ride.jpeg",
      services: ["Ride to any location"],
    },
    {
      title: "Consulting Services",
      img: "/ninja.jpeg",
      services: ["Teacher", "Doctor", "Lawyer", "Astrologer"],
    },
  ];

  const popUp = (
    <div
      className={styles["modal"]}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className={styles["content"]} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles["subhead"]}>{arr[idx].title}</h3>
        {idx == 0 || idx == 3 ? (
          <div>
            <h6 style={{ marginTop: "2rem", fontWeight: "bold" }}>Services</h6>
            <div className={styles["coll"]}>
              {arr[idx].services.map((item) => {
                return (
                  <Link href="/ninja">
                    <div className={styles["upper1"]}>
                      <img src="/ninja.jpeg" />
                    </div>
                    <div className={styles["lower1"]}>{item}</div>
                  </Link>
                );
              })}
            </div>
            <div>
              <h6 style={{ marginTop: "2rem", fontWeight: "bold" }}>Others</h6>
              <input
                type="text"
                className={styles["inp"]}
                placeholder="Enter the service"
              />
            </div>
            <div>
              <button className="bg-red-500 mt-2 text-black px-4 py-2 rounded-md transition hover:bg-red-700">
                Find <span className="text-black-500">Ninja</span>
              </button>
            </div>
          </div>
        ) : idx == 2 ? (
          (
          <>
            {tab == 1 ? (
              <div>
                <img src="/i1.jpeg" width={"200px"} height={"200px"} className="ml-40"/>
                {/* <button onClick={() => setTab(2)}>
                Next</button> */}
                <button onClick={() => setTab(2)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Search
                </button>

              </div>
            ) : tab===2 ? (
              <div >
            <img src="/i2.jpeg" width={"200px"} height={"200px"} className="ml-40"/>
      
              <button onClick={() => setTab(3)} className="bg-blue-500 mt-2 text-black px-4 py-2 ml-60 rounded-md transition hover:bg-red-700">
          <span className="text-black-500">NEXT</span>
         </button>
              {/* <button onClick={() => setTab(3)}>
                Next</button> */}
              </div>
              
            ) : (
              <div>
              <img src="/i3.jpeg" width={"200px"} height={"200px"} className="ml-40"/>
      
              </div>
            )}
          </>
        )
        ) : (
          <>
            {tab == 1 ? (
              <div>
                <h5 style={{ margin: "1rem 0", fontWeight: "bold" }}>
                  Duration:
                </h5>
                <div className="flex">
                  <div className={styles["box"]}>1hr</div>
                  <div className={styles["box"]}>2hr</div>
                  <div className={styles["box"]}>3hr</div>
                  <div className={styles["box"]}> {">"} 3hr</div>
                </div>
                <img src="/date and time.png" width={"500px"} height={"200px"}/>
                <button onClick={() => setTab(2)} className="bg-blue-500 mt-2 text-black px-4 py-2 ml-60 rounded-md transition hover:bg-red-700">
              <span className="text-black-500">NEXT</span>
              </button>
                {/* <button onClick={() => setTab(2)}>
                Next</button> */}
              </div>
            ) : tab===2 ? (
              <div>
              <button  onClick={() => setTab(3)} className="bg-orange-500 mt-2 text-black px-4 py-2 ml-40 rounded-md transition hover:bg-red-700">
                Booking Confirmed</button>
               <div>
                <img src="/ninjai.png" width={"300px"} height={"300px"} className="ml-20 mt-1"/>
               </div>
           
              </div>
            ) : (
              <div className="text-red ">
               Our ninja will arive at right time :
               <div>
               TOTEL COST (3hr) - 500 Rupees
               </div>
                
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      {modal ? popUp : null}
      <div className={styles["main"]}>
        <div>
          <div className={styles["container"]}>
            <div className={styles["left"]}>
              <h1 className={styles["head"]}>
                On demand Services{" "}
              </h1>
              <div className={styles["services"]}>
                <h4>What are you looking for?</h4>
                <div className={styles["list"]}>
                  {arr.map((item, i) => {
                    return (
                      <div
                        onClick={() => {
                          setModal(true);
                          setIdx(i);
                          setTab(1)
                        }}
                      >
                        <div className={styles["upper"]}>
                          <img src={item.img} width={"80px"} height={"60px"} />
                        </div>
                        <div className={styles["lower"]}>{item.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles["right"]}>
              <img src="/front.png" />
            </div>
          </div>
        </div>
        {/* <div className="mt-20">
          <Services />
        </div> */}
      </div>
    </>
  );
}
