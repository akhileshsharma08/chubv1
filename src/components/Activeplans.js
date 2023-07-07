"use client"

import React, { useState } from 'react';
import { UseUserAuth } from '../Context/UserAuthContextProvider';

const Activeplans = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, plan } = UseUserAuth()
  console.log(plan,"plan")


  const setPlan = 5;
  return (
    <>
      <div className="detailbox1">
        <a href='#'
          className=" my-5 text-black border border-black hover:border-yellow-500 hover:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >Active Plans
        </a>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-0 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 w-80 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Active Plans
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
                <div className="relative py-2 px-6 flex-auto">
                <span>You have {plan.length} Active plan.</span>

                  <p className="my-2 text-slate-500 text-lg leading-relaxed">
                    {/* {setPlan>0 ? `${setPlan} Active Plans `:"No active plan"} */}
                 
                      <div className="w-22 max-w-xl rounded-md bg-yellow-500 p-2 text-gray-800 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold uppercase text-gray-800">{plan}</p>
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
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent hover:bg-red-500 hover:text-white hover:rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Activeplans
