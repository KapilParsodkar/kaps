import { EXPERIENCES } from "../constants"

const Exp = () => {
  return (
<div className="border-b border-neutral-900 pb-4">
<h2 className="my-20 text-center text-4xl">Work Experience</h2>
<div>
{EXPERIENCES.map((e,index)=>(
<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
<div className="w-full lg:w-1/4 flex flex-col items-center">
<img src={e.image} width={150} height={150} className="mb-6 rounded" alt="" />
<p className="mb-2 text-sm text-neutral-400">{e.year}</p>
</div>
<div className="w-full max-w-l lg:w-3/4">
<h6 className="mb-2 font-semibold">
{e.role} -{" "}
<span className="text-sm text-violet-100">{e.company}</span>
</h6>
<p className="mb-4 text-neutral-400 text-left">{e.description}</p>
{e.technologies.map((t,index)=>(
<span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-400">
{t}
</span>
))}
</div>
</div>
))}
</div>
</div>
  )
}

export default Exp