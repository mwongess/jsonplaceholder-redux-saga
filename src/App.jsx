import './App.css'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

function App() {

  return (
    <div className='flex flex-col sm:flex-row gap-6 p-4 sm:p-8 sm:px-[15%]'>
      <div className='hidden sm:flex flex-col items-center border w-full sm:w-1/4 rounded-lg h-fit p-4 sticky top-0'>
        <img className="rounded-full h-[4.5rem] w-[4.5rem]" src="https://avatars.githubusercontent.com/u/86522089?v=4" alt="Profile" />
        <h1 className='font-bold text-lg'>Amos Mwongela</h1>
        <p className='text-center text-gray-500 text-sm'>Full Stack Developer (Ts , React (Next.Js) , Angular , Node..Js, MySQL ,MSSQL ,AWS)</p>
      </div>
      <div className='flex flex-col gap-2 w-full sm:w-1/2 rounded-lg '>
        <CreatePost />
        <hr />
        <PostList />
      </div>
      <div className='shadow w-1/4 rounded-lg h-fit'></div>
    </div>
  )
}

export default App
