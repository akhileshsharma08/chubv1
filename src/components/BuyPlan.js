"use client"

import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { UseUserAuth } from '../Context/UserAuthContextProvider'
import Data from '../../public/category.json'
import emailjs from '@emailjs/browser';
import { db } from '../firebase';
import { useRouter } from 'next/router';
import { query, collection, onSnapshot, doc, docRef, getDoc, setDoc, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyPlan = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const { user, plan, setPlan } = UseUserAuth()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [address, setAddress] = useState("")
    const [category1, setCategory1] = useState("")
    const [category2, setCategory2] = useState("")
    const [numberOne, setnumberOne] = useState("")
    const [numberTwo, setnumberTwo] = useState("")
    const [from_email, setFrom_email] = useState("")
    const [userId, setUserId] = useState("")
    const [buyData, setBuyData] = useState({})
    const router = useRouter()




    const HandlePuyPlan = async (e) => {

        e.preventDefault()
        const buyplandata = {
            userID: user.uid,
            plan: plan,
            name: name,
            from_email: user.email,
            phone: phone,
            category1: category1,
            count_category1: numberOne,
            category2: category2,
            count_category2: numberTwo,
            from: fromDate,
            to: toDate,
            address: address,
        }
        setBuyData(buyplandata)

        // await setDoc(doc(db, "buyplan",user.uid),{buyplandata});
        const docRef = await addDoc(collection(db, "buyplan"), {
            buyplandata
          });
          console.log("Document written with ID: ", docRef.id);

        toast.success("Informton Updated ✔")

        setTimeout(() => {
            router.push('/payment')
        }, 3000)

        // await emailjs.sendForm('service_389n8zq', 'template_fxybser', form.current, 'Wde_rLx2XiX3-JCno')
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("email sent with success")
        //     }, (error) => {
        //         console.log(error.text,"error in message");
        //     });
        // await emailjs.sendForm('service_389n8zq', 'template_gmqvend', form.current, 'Wde_rLx2XiX3-JCno')
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("email sent to client with success")
        //     }, (error) => {
        //         console.log(error.text,"error in message");
        //     });
    };

    return (
        <>
            <div className="detailbox1">
                <a href='#'
                    className=" my-5 text-black border border-black  hover:border-yellow-500 hover:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                > &nbsp;&nbsp;&nbsp;Buy Plan &nbsp;&nbsp;&nbsp;
                </a>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Buy Plan
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-2 flex-auto mx-4">
                                    {/* <p className="my-1 text-slate-500 text-lg leading-relaxed">
                 
                  </p> */}
                                    <form ref={form}>
                                        {/* choose plan bose  */}
                                        <div className="flex my-4 items-center justify-center ">
                                            <div className="mx-auto max-w-2xl px-5">
                                                <div className="flex flex-wrap gap-3">
                                                    <label className="cursor-pointer">
                                                        <input type="radio" className="peer sr-only" value="basic" name="plan" id='plan' onChange={(e) => setPlan(e.target.value)} />
                                                        <div className="w-22 max-w-xl rounded-md bg-yellow-500 p-2 text-gray-800 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-semibold uppercase text-gray-800">Basic</p>
                                                                    <div>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-end justify-between">
                                                                    <p><span className="text-lg font-bold">12 GB</span> of storage</p>
                                                                    <p className="text-sm font-bold">$12 / mo</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <label className="cursor-pointer">
                                                        <input type="radio" value="pro" onChange={(e) => { setPlan(e.target.value) }} className="peer sr-only" id='proplan' name="plan" />
                                                        <div className="w-22 max-w-xl rounded-md bg-yellow-500 p-2 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-semibold uppercase text-gray-800">pro</p>
                                                                    <div>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-end justify-between">
                                                                    <p><span className="text-lg font-bold">50 GB</span> of storage</p>
                                                                    <p className="text-sm font-bold">$21 / mo</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <label className="cursor-pointer">
                                                        <input type="radio" onChange={(e) => { setPlan(e.target.value) }} value="premium" className="peer sr-only" name="plan" id='premium' />
                                                        <div className="w-22 max-w-xl rounded-md bg-yellow-500 p-2  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-semibold uppercase text-gray-800">premium</p>
                                                                    <div>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-end justify-between">
                                                                    <p><span className="text-lg font-bold">90 GB</span> of storage</p>
                                                                    <p className="text-sm font-bold">$49 / mo</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* choose plan bose  */}
                                        <input type="hidden" value={user.email} onChange={(e) => setFrom_email(e.target.value)} name='from_email' className='border border-1 border-yellow-500 w-full mb-4 p-2'
                                            placeholder='Enter Your email ' />
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' className='border border-1 border-yellow-500 w-full mb-4 p-2'
                                            placeholder='Enter Your Name ' />
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' className='border border-1 border-yellow-500 w-full mb-4 p-2'
                                            placeholder='Enter Your Phone ' />
                                        <div className="selectionbox justify-center items-center flex ">
                                            <div className="w-2/5 md:w-2/5 px-3 mb-6 md:mb-2">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Category 1
                                                </label>
                                                <div className="relative">
                                                    <select value={category1} name="category1" onChange={(e) => setCategory1(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        {Data.map((item) => {
                                                            return (
                                                                <option key={item.id}>{item.category}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="w-1/4 md:w-1/4 px-3 mb-6 md:mb-2">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Numbers
                                                </label>
                                                <div className="relative">
                                                    <select value={numberOne} name="numberOne" onChange={(e) => setnumberOne(e.target.value)} className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="15">15</option>
                                                        <option value="20">20</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="w-full md:w-2/5 px-3 mb-6 md:mb-2">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Category 2
                                                </label>
                                                <div className="relative">
                                                    <select value={category2} name="category2" onChange={(e) => setCategory2(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        {Data.map((item) => {
                                                            return (
                                                                <option key={item.id}>{item.category}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="w-4/3 md:w-4/3 px-2 mb-6 md:mb-2">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Numbers
                                                </label>
                                                <div className="relative">
                                                    <select value={numberTwo} name="numberTwo" onChange={(e) => setnumberTwo(e.target.value)} className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="15">15</option>
                                                        <option value="20">20</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                        <label htmlFor="fromDate" className='mx-2'>From :</label>
                                        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} name="fromDate" id="fromdate" className='border-solid border-2 border-yellow-500 mb-2' />
                                        <label htmlFor="toDate" className='mx-2'>To :</label>
                                        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} name="toDate" id="todate" className='border-solid border-2 border-yellow-500 mb-2' />
                                        <input type="text" value={address} name="address" onChange={(e) => setAddress(e.target.value)} className='border border-1 border-yellow-500 w-full mb-4 p-2 placeholder:text-gray-400 text-black' placeholder='Enter Your Address ' />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-2  rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-yellow-500 text-white hover:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={(HandlePuyPlan)}
                                    >
                                        Buy Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
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
    )
}

export default BuyPlan
