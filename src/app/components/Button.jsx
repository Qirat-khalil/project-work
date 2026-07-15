import { ArrowRight } from 'lucide-react';
import React from 'react';

const Button = ({ name , children, onClick, istrue}) => {
  return (
    <div>
      <button onClick={onClick} className='px-2 py-4 w-45 flex justify-center items-center gap-2 rounded-4xl font-bold shadow-2xl cursor-pointer text-white bg-[#185964] hover:bg-[#0e444b] '>
        {name}
        {children}
        {istrue  === true &&
            <ArrowRight
                  size={26}
                  className="text-white "
                />
         }
      </button>
     
      
    </div>
  );
};

export default Button;









