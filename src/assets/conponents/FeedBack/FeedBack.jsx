import React from 'react';

const FeedBack = ({ feedBackData }) => {
    // console.log(feedBackData);
    // const {review,name,userImg} = feedBackData

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                feedBackData.map(feed =>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center'>
                                <img src={feed.userImg} className='h-12 w-12 rounded-full border-2 border-red-400 bg-cover' alt="image" />
                                <h2 className="card-title ml-4">{feed.name}</h2>
                                <p className='ml-4'>{new Date().toLocaleDateString()}</p>
                            </div>
                            <p>{feed.review}</p>
                            <div className="card-actions justify-end justify-center items-center">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FeedBack;