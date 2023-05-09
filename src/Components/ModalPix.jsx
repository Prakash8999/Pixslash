import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'

const ModalPix = ({ data, setPixModel }) => {

	const download = e => {
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
					link.setAttribute("download", `${data.tags.replaceAll(',' , '-')}.jpg`); //or any other extension
					document.body.appendChild(link);
					link.click();
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
// const tag = data.tags
// const obj = JSON.parse(tag)
	return (
		<>
		<div className='hidden md:block'>

			<div className='h-screen w-screen backdrop-blur-xl flex items-center justify-center fixed top-0 left-0  shadow-lg z-[100]  '>
				<div className='relative p-5 gap-y-5 h-[90vh] overflow-y-scroll w-[90vw] bg-white rounded-lg flex flex-col  items-center'>
					
					<div className='w-[100%] h-[80vh] flex justify-center items-center'>	
					<button onClick={() => { setPixModel({ show: false }) }} className="absolute top-1 right-2 font-bold text-2xl text-red-600"><AiOutlineClose /></button>
					<img src={data.largeImageURL} className=" h-[100%] w-fit rounded-lg " alt="" />
					<button onClick={()=>{download(data.largeImageURL)}} className="absolute right-2 top-12 border-2 p-1 rounded-md border-black shadow hover:scale-105 duration-300 hover:shadow-lg ">Download</button>
					</div>
				


				<div className='  text-black border-black border rounded-md p-2 w-[90%]'>
					<h1 className='font-bold'>Photo Details:-</h1>
						<p>Photo Tags: {data.tags}</p>
						<p className='flex'> Total Likes: {data.likes} <FcLike /> </p>
						<p>Total Downloads: {data.downloads} </p>
						<hr className='border' />
						<h1 className='font-bold'>Photographer Details:-</h1>
					
						<p>UserName: {data.user}  </p>
						<p className='p-2 flex w-fit'><a href= {`https://pixabay.com/users/search/${data.user}/`} target="_blank" className='border-2 p-1 px-8 rounded-md border-black shadow-2 hover:scale-105 duration-300 hover:shadow-lg hover:font-semibold '> Profile</a> </p>
						{/* <a href={data.user.links.html} target="_blank"><button className='text-black border-2 border-black p-1 rounded-md px-4'>Profile</button></a> */}	
					</div>

					</div>
			</div>
		</div>
		</>
	)
}

export default ModalPix