import { RootState } from '@/store/type';
import React from 'react'
import { useSelector } from 'react-redux';

function Gidration() {
    const likeLength = useSelector(
        (state: RootState) => state.FavoriteCard.items.length
      );
      const savatLength = useSelector(
        (state: RootState) => state.cart.items.length
      );
  return (
    <div>
             {/* {likeLength && (
                  <span className="bg-blue-700 px-2 text-white absolute right-[1px] -top-3 rounded-full ">
                    {likeLength > 0 ? likeLength : 0}
                  </span>
                )} */}
         {savatLength && (
              <span className=" bg-blue-700 px-2 text-white absolute right-[1px] -top-3 rounded-full">
                {savatLength}
              </span>
            )}
    </div>
  )
}

export default Gidration
