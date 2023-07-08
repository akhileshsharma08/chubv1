// import React, { useEffect, useState } from "react";
// import Activeplans from "../components/Activeplans";
// import UserDetails from "../components/UserDetails";
// import BuyPlan from "../components/BuyPlan";
"use client"
import { useRouter } from "next/router";
import { UseUserAuth } from "../../Context/UserAuthContextProvider";
import { db, storage } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  query,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getDocs,
  where,
  addDoc,
  setDoc,
  get,
  getDoc,
} from "firebase/firestore";

const Dashboard = () => {
  const { LogOut, user, photo, setCurrentUserData, currenUserData,PlanData,setPlanData } =
    UseUserAuth();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const myuserid = user.uid;
  const [dp, setdp] = useState("");
  console.log(currenUserData,"jijjkjkk")

  const router = useRouter();

  // console.log(user.uid, "<<----------->>");

  const Loader = () => {
    return (
      <div className="flex justify-center items-start">
        <div>
          <h1 className="text-blue-600 text-6xl my-72">loading...</h1>
        </div>
      </div>
    );
  };

  const HandleLogout = async () => {
    await LogOut();
    setLoading(true);
    if (loading) return <Loader />;
    router.push("/");
  };

  useEffect(() => {
    if (loading && !user) {
      <Loader />;
      router.push("/login");
    }
  }, []);

  
  useEffect(() => {
    let localuser = localStorage.getItem("user");
    let curruser = JSON.parse(localuser);
    var curid = curruser.uid;
    console.log(curruser.uid,"curr user using locl ")
    checkingUserDetail();
    fetchingPlans()
  }, []);

  const checkingUserDetail = async () => {
    let localuser = localStorage.getItem("user");
    let curruser = JSON.parse(localuser);
    var curid = curruser.userId;

   

    //-----------------------
    const docRef = doc(db, "userData", `${curid}`);
    // const docRef = doc(db, "userData", `4VKmSCCUydcVVbKNs52bFEhnMYn2`);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log(docSnap.data(),"data mil gaya");
        setCurrentUserData(docSnap.data());
        // console.log(currenUserData, "data mil gaya");
      } else {
        console.log("user data does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };


  //--------------------------------------
  const fetchingPlans= async()=>{
    let localuser = localStorage.getItem("user");
    let curruser = JSON.parse(localuser);
    var curid = curruser.userId;
    const dbref = collection(db, "buyplan");
    const q= query(dbref,where("from_email", "==", "its.akhilesh23@gmail.com"))
onSnapshot(q,(snap)=>{
  let rex=[]
  console.log(snap,"snapp")
   snap.docs.map((doc)=>{
    rex.push({...doc.data(),id:doc.userID})
  })
  console.log(rex,"rex")
})


//-------------------------------
// const q = query(collection(db, "buyplan"), where("from_email", "==", "its.akhilesh23@gmail.com"));

// const querySnapshot = await getDocs(q);
// console.log(querySnapshot)
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc, " => ", doc.data());
// });



// const querySnapshot = await getDocs(q);
// let res=querySnapshot.docs
// console.log(res,"rsssss")
// res.forEach((doc) => {
//   console.log( doc.docs,"hj");
//   if(doc.data().userID == curid){
//     console.log(doc.data().userID,"docccc");
//     let result = doc.data()
//     console.log(result,"hjyyyy");
//   }else{
//     console.log('error in plans')
//   }
// });



console.warn("tryinggg")

  }




  // useEffect(() => {
  //   if (currenUserData) {
  //     const imageURL = currenUserData.imageURL;
  //     getImageURL(imageURL).then((dp) => setdp(dp));
  //   }
  // }, [currenUserData]);

  return (
    <>
      (
      <div className="dashboard-section">
        <div className="containerbox my-24">
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center justify-between">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img
                  className="object-cover object-center  mx-auto bg-blue-100 rounded-full "
                  width={50}
                  height={50}
                  alt="hero"
                  src={!photo ? "/img/logo1.png" : photo}
                />

                <span className="ml-3 text-xl">{!user ? "" : user.email}</span>
              </a>

              <button
                onClick={HandleLogout}
                className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-white mt-4 md:mt-0"
              >
                Log Out{" "}
              </button>
            </div>
          </header>

          <div className="container mx-auto flex sm:flex-row flex-col-reverse">
            <div className="card flex basis-[55%] justify-center items-center flex-col ">
             
              <UserDetails userdata={currenUserData} />
              <BuyPlan />
              <Activeplans />
            </div>
            <div className="flex basis-[45%] mx-auto   ">
              <img
                className="object-cover object-center flex justify-center items-center bg-blue-200   rounded-full p-2"
                width={250}
                height={250}
                alt="hero"
                src={'img/logo1.png'}
                // src={dp}
              />
              {/* <input type="file" name="" id="" className='  flex justify-end z-10 top-10'/> */}
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Dashboard;
