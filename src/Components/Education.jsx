import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
<h2 className="my-20 text-center text-4xl">Education</h2>
    <div>
{EDUCATION.map((e,index)=>(
    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
    <div className="w-full lg:w-1/4 flex flex-col items-center">
    <img src={e.image} width={150} height={150} className="mb-6 rounded" alt="" />
    <p className="mb-2 text-sm text-neutral-400">{e.year}</p>
    </div>
    <div className="w-full max-w-l lg:w-3/4">
<p className="mb-4 text-neutral-400 text-left">{e.title}</p>
    
<p className="mb-4 text-pink-400 text-left">{e.description}</p>
 
    </div>
    </div>
    ))}
    </div>
    </div>
      )
    }

export default Education