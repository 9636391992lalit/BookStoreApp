import React from 'react'
import Cards from "./Cards"

import {useEffect,useState} from "react"
import axios from "axios";
function Courses()
{

    const [book,setBook]=useState([])
    useEffect(()=>{
    const getBook=async()=>
        {
        try{
             const res=await axios.get("http://localhost:4001/book");
             console.log(res.data);
             setBook(res.data)
        }
        catch(error)
        {
            console.log(error)

        }
        }
        getBook();
    },[])
    return(<>
    <div className="  w-full  container mx-auto md:px-25  ">
        <div className=' items-center justify-center text-center'>
            <h1  className=" pt-24 text-2xl front-semibold md:text-4xl text-center">
             We are delightened to have <span className="text-teal-600">Here:)</span>
            </h1>
            <p className="mt-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error exercitationem laudantium fugit quod nostrum. Incidunt quidem perferendis dolorem consequatur fuga in doloremque facilis voluptate nobis omnis accusantium, neque nemo dignissimos?
                Dolor autem eum ipsum sapiente nulla officia tempore numquam eligendi enim laudantium, eveniet, commodi doloribus eos inventore ducimus nam, aliquid quidem? Recusandae iure sunt, quis totam voluptatem pariatur commodi quam.
                Odio facilis nulla, laborum ut similique, non quibusdam nesciunt deserunt perferendis dolor odit expedita sunt optio molestiae praesentium impedit ipsam accusantium. Minus deleniti, laborum natus reprehenderit quas veritatis repellat architecto.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((items)=><Cards key={items.id} item={items}></Cards>)}
        </div>
    </div>

    </>)
}
export default Courses;