export default function RegisterScreen(){
  return (
    <div className='container max-w-full mx-auto py-24 px-6'>
      <form className='mt-8'>
        <div className='mx-auto max-w-lg'>
          <div className="py-2">
            <span className="px-1 text-sm text-gray-600">Username</span>
            <input placeholder="" type="text"
              className="text-md block px-3 py-2  rounded-lg w-full
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
          </div>
        </div>
      </form>
    </div>
  )
}
