import React from 'react'
import PreviousEventCard from './PreviousEventCard'
import eventData from '../../../../dummyPrevEventData'
import { SvgButton } from '../../../../styles/Mui-styles/HoverFillButton'
import { FaDiscord } from 'react-icons/fa'



const UpcomingEvents = () => {
    return (
        <div className='md:mx-28 mt-10 flex flex-col w-10/12 mx-auto lg:text-left'>
            <h1 className='text-4xl text-center py-8' >Previous Events </h1>
            <div className=''>
                {eventData.map((data, i) => {
                    return <PreviousEventCard eventposter={data.eventposter} heading={data.heading} venue={data.venue} startingTime={data.startingTime} endingTime={data.endingTime} instructorOrspeaker={data.instructorOrspeaker}
                    participants={data.participants} agenda={data.agenda} winners={data.eventWinners} key={i}/>
                })}
            </div>
            <SvgButton className='max-w-fit mx-auto mt-10'><span className=' font-nunito font-bold'>Explore All</span> </SvgButton>
        </div>
    )
}

export default UpcomingEvents