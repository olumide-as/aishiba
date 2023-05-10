import React from 'react'

const Brandsmall = ({imgUrl, brand}) => {
  return (
    <div>       
        <div className="flex items-center gap-x-3">
            <img src={imgUrl} className="w-6 h-12 rounded-full" alt='brand'/>
            <div>
                <span className="block text-slate-50 font-jost">{brand}</span>
            </div>
        </div>
</div>
  )
}

export default Brandsmall