import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useDataContext } from '../Context/Context'
import ModalPix from './ModalPix'


const Pixabay = (props) => {
    const [PixImages, setPixImage] = useState([])
    const { query, pixabayData } = useDataContext()
    const [pixModel, setPixModel] = useState({ show: false, data: {} })
    useEffect(() => {

        axios(`https://pixabay.com/api/?key=23026282-2e8d526d4b17c863daf509a85&image_type=photo&pretty=true&per_page=18`, {
            method: "GET"
        })
            .then((response) => {
                // console.log("Pixabay");
                // console.log(response);
                setPixImage(response.data.hits)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])
    const download = (e, data) => {
        console.log(e);
        fetch(e, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    // link.setAttribute("download", `${data.user.name.split(" ").join("-").toLowerCase()}-${data.id}.jpg`); //or any other extension
                    link.setAttribute("download", `image.jpg`); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            {pixModel.show && <ModalPix data={pixModel.show && pixModel?.data} setPixModel={setPixModel} />}

            {/* <div className='md:p-4 py-3 px-1'>
<div className='w-fit md:grid md:grid-cols-3 md:gap-6 md:p-4 mx-auto md:border-2 border-slate-200 rounded-lg grid gap-y-5'>

            {
            
            
            query.lenght !== 0 && pixabayData? 
            pixabayData?.map((value, index)=>{
                return (<div className='' key={index}>
                    
                    {<div onClick={() =>{setPixModel({show:true, data:value})}} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      
                      <img className="rounded-lg shadow cursor-pointer hover:shadow-xl md:hover:scale-105 duration-300" src={value.largeImageURL} alt=""  />
                      
                      
                    </div> }
                       
                     </div>


                )
            })

            :
            PixImages?.map((value, index) => {
                return (<div className='' key={index}>
                    

                    {<div onClick={() =>{setPixModel({show:true, data:value})}} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      
                      <img className="rounded-lg shadow cursor-pointer hover:shadow-xl md:hover:scale-105 duration-300" src={value.largeImageURL} alt=""  />
                      
                      
                    </div> }
                       

                </div>
                )
                
                
            })







            }

            </div>
            </div> 

 */}
            <div className='md:p-4  px-1'>
                <div className='w-fit md:grid md:grid-cols-3 md:gap-6 md:p-4 mx-auto md:border-2 border-slate-200 rounded-lg grid gap-y-5'>

                    {
                        query.lenght !== 0 && pixabayData ?
                            pixabayData?.map((value, index) => {
                                return (<div className='py-5 md:py-0' key={index}>
                                    {<div onClick={() => { setPixModel({ show: true, data: value }) }} className="max-w-sm  bg-white  md:border-hidden border border-gray-200 rounded-lg  pb-1 md:pb-0"  >
                                        <div className='md:hidden block w-fit'> <a href={`https://pixabay.com/users/search/${value.user}/`} target="_blank" className='flex ' >@<p className='text-blue-600'>{value.user}</p></a></div>

                                        <img className="rounded-lg shadow cursor-pointer hover:shadow-xl md:hover:scale-105 duration-300" title='Click to view more' src={value.largeImageURL} alt="" />


                                        <div className='block md:hidden px-4 pt-1'>

                                            <div className='flex justify-between h-fit '>
                                                <p className='flex w-full text-xl items-center'> {value.likes} <FcLike className=' h-9 pb-1' /> </p>
                                                <button onClick={() => { download(value.largeImageURL) }} className='flex border-2 border-slate-400 py-1 px-3 rounded-md '  > Download <AiOutlineDownload className='mt-1 mx-1 ' /> </button>
                                            </div>

                                        </div>
                                    </div>}
                                </div>
                                )


                            })
                            :
                            PixImages?.map((value, index) => {
                                return (<div className='py-6 md:py-0' key={index}>
                                    {<div onClick={() => { setPixModel({ show: true, data: value }) }} className="max-w-sm  bg-white  md:border-hidden border border-gray-200 rounded-lg   pb-1 md:pb-0   "  >
                                        <div className='md:hidden block w-fit'>
                                            <a href={`https://pixabay.com/users/search/${value.user}/`} target="_blank" className='flex ' >@ <p className='text-blue-600'>{value.user} </p></a>
                                        </div>

                                        <img className="rounded-lg shadow cursor-pointer hover:shadow-xl md:hover:scale-105 duration-300" title='Click to view more' src={value.largeImageURL} alt="" />


                                        <div className='block md:hidden px-4 pt-1'>

                                            <div className='flex justify-between h-fit '>
                                                <p className='flex w-full text-xl items-center'>{value.likes}  <FcLike className=' h-9 pb-1' /> </p>
                                                <button onClick={() => { download(value.largeImageURL) }} className='flex border-2 border-slate-400 py-1 px-3 rounded-md '  > Download <AiOutlineDownload className='mt-1 mx-1 ' /> </button>
                                            </div>

                                        </div>
                                    </div>}
                                </div>
                                )


                            })
                    }

                </div>
            </div>

        </>
    )
}

export default Pixabay