"use client"

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { getStorage,ref,uploadBytes } from "firebase/storage"

import {
  doc,
  setDoc,
} from "firebase/firestore";
import { UseUserAuth } from "../Context/UserAuthContextProvider";
import { storage } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Triangle } from  'react-loader-spinner'

const UserDetails = ({userdata}) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userid, setUserid] = useState("");
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [updateddata, setUpdatedData] = useState([]);
  const [loading,setLoading]= useState(false)
  const {photo, setPhoto,user,getImageURL,imgUrl,setImgUrl} = UseUserAuth()
  const firebase= UseUserAuth()

  const myuserid = user.uid;
  // console.log(myuserid, "uidd");
  // console.log(userData,"userdata")


  const HandleUserDetails = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `uploads/images/${Date.now()}-${photo.name}`);
    setLoading(true)
    const uploadResult = await uploadBytes(imageRef, photo);
    setShowModal(false)
    setLoading(false)
    toast.success("Informton Updated ✔");

    return await setDoc(doc(db, "userData", `${user.uid}`), {
      ...data,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      photoURL: user.photoURL,
      name: name,
      email: user.email,
      phone: phone,
      address: address,
    });
   
  };

  useEffect(() => {
    // firebase.getUserById(myuserid).then((value) => setData(value.data()));
    // console.log(data,"single data")
  }, []);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      // firebase.getImageURL(imageURL).then((imgUrl) => setImgUrl(imgUrl));
    }
  }, [data]);

  if(loading){
    return <h1 className="my-24 mx-12 relative z-30 "> loadingg...</h1>
  }

  return (
    <>
      <div className="detailbox1">
        <a
          href="#"
          className=" my-5 text-black border border-black hover:border-yellow-500 hover:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {setShowModal(true)}}
        >
          User Details
        </a>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 rounded-t">
                  <h3 className="text-xl font-semibold">User Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-2 flex-auto">
                  <form>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-1 border-yellow-500 w-full mb-4 p-2"
                      placeholder="Enter Your Name "
                    />
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-1 border-yellow-500 w-full mb-4 p-2"
                      placeholder="Enter Your Email "
                    />
                    <input
                      value={phone}
                      type="phone"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="border border-1 border-yellow-500 w-full mb-4 p-2"
                      placeholder="Enter Your Phone "
                    />
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="border border-1 border-yellow-500 w-full mb-4 p-2"
                      name="address"
                      id="address"
                      placeholder="Your Address"
                    />
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input type="file" name='photo' onChange={(e) => setPhoto(e.target.files[0])} className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-yellow-500 file:text-white
                          hover:file:bg-yellow-400
                        "/>
                    </label>
                  </form>
                </div>
                <div className="flex items-center justify-end p-2  rounded-b">
                  <button
                    className="text-red-500 mx-2 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-yellow-500 text-white hover:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={HandleUserDetails}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default UserDetails;
