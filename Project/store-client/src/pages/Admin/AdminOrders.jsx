import React, { useEffect, useState,useRef } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Trash, TriangleAlert,Plus,X } from 'lucide-react' 
import { getOrders,addOrder,deleteOrder} from '../../api/api'
const AdminOrders = () => {

const[orders,setOrders] = useState(null)
const [loading, setLoading] = useState(true)
const [showAdd, setShowAdd] = useState(false);
const uidRef = useRef(0);
const pidRef = useRef("");
const totalRef = useRef("");
const phoneRef = useRef();
const addressRef = useRef("");
const orderedAtRef = useRef("");
async function fetchData(){
  try {
    const res = await getOrders()
    if (res.status === 200) {
      setOrders(res.data)
    }

  } catch (error) {
    console.log(error)
  }
  finally {
    setLoading(false)
  }
}
const handleAdd = async (e) => {
  e.preventDefault();
  const order = {
    uid: uidRef.current.value,
    pid: pidRef.current.value,
    total:totalRef.current.value,
    phone: parseInt(phoneRef.current.value),
    address: addressRef.current.value,
    orderedAt: orderedAtRef.current.value,

  };
  console.log(order);
  try {
    const response = await addOrder(order);
    if (response.status === 200) {
      console.log("Order Added");
      setShowAdd(false);
      fetchData();
    }
  } catch (error) {
    console.error(error);
  }
};

const handleDelete = async (id) => {
  try {
    const response = await deleteOrder(id);
    if (response.status === 200) {
      console.log("Order deleted");
      fetchData();
    }
  } catch (error) {
    console.error(error);
  }
};



useEffect(() => {
  fetchData()
}, [])

if (loading) {
  return (
    <>
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
      </div>
    </>
  )
}
if (!orders || orders.length === 0) {
  return (
    <>
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <TriangleAlert className='text-orange-400 h-12 w-12' />
        <p>
          No Orders Available !
        </p>
      </div>
    </>
  )
}

  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <div className="w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border">
      <AdminPageHeader title='Orders'/>
      <button
          className="w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md
         text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md
          hover:shadow-green-400"
          onClick={() => setShowAdd(!showAdd)}
        >
          <Plus className="w-8 h-8" />
        </button>
      </div>
      <table className='w-full h-5 border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>UserId</th>
            <th className='p-6'>OrderDate</th>
            <th className='p-6'>ProductId</th>
            <th className='p-6'>OrderPrice</th>
            <th className='p-6'>ShippingAdress</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order,index)=>(

           
        <tr key={index} >
                <td className='p-6'>{order.uid}</td>
                <td className='p-6'>{order.pid}</td>
                <td className='p-6'>{order.total}</td>
                <td className='p-6'>{order.phone}</td>
                <td className='p-6'>{order.address}</td>
                <td className='p-6'>{order.orderedAt}</td>
                <td className='p-6 flex h-full w-full fpingAdresslex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                  <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'
                                onClick={() => {
                    handleDelete(order._id);
                  }}
                >        <Trash />
                  </button>
                </td>
              </tr>
               ))
              }
              
           
          </tbody>
          </table>    
          {showAdd && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className="h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md">
              <div className="h-full w-full flex flex-col justify-center items-center text-lg font-semibold">
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className="w-1/2 text-left text-xl my-6 font-bold text-green-500">
                    Add Order
                  </h1>
                  <div
                    className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer"
                    onClick={() => {
                      setShowAdd(!showAdd);
                    }}
                  >
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form
                  className="h-[70%] w-[80%] flex flex-col justify-center items-center gap-8"
                  onSubmit={handleAdd}
                >
                  <input
                    ref={uidRef}
                    type="String"
                    name=""
                    id="uid"
                    placeholder="UserId"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={pidRef}
                    type="String"
                    name=""
                    id="pid"
                    placeholder="ProductId"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={totalRef}
                    type="String"
                    name=""
                    id="totalRef"
                    placeholder="TotalRef"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={phoneRef}
                    type="number"
                    name=""
                    id="phoneRef"
                    placeholder="phoneRef"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={addressRef}
                    type="String"
                    name=""
                    id="addressRef"
                    placeholder="Address"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <input
                    ref={orderedAtRef}
                    type="String"
                    name=""
                    id="orderedAtRef"
                    placeholder="orderedAt"
                    className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AdminOrders