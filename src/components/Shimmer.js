

const Shimmer = () =>{

    return(
        <>
        <div className='flex flex-wrap'>
       {Array(10).fill("").map(e=> <div className='w-[250] h-[300] m-5 bg-gray-300'> </div>)}
       </div>
        </>

    );
}
export default Shimmer;