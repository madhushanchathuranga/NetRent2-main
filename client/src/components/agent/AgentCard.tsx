import { useState, useEffect } from 'react'
import axios from 'axios'
import { testUser } from '../../assets/images'
import { checkCircleGreenIcon, eyeIcon, fbIcon, inIcon, starIcon, tiktokIcon, verifiedIcon, ytIcon } from '../../assets/icons'
import PropertyAppraisalModal from './PropertyAppraisalModal'

const AgentCard = () => {
    const [agentData, setAgentData] = useState<any>(null); // Initial state is null
    const [loading, setLoading] = useState(true); // Loading state to show a loading indicator
    const [error, setError] = useState<string | null>(null); // Error state

    // Fetch the agent data from the backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:3000/api/agents') // Adjust the URL if needed
            .then(response => {
                setAgentData(response.data); // Set agent data to the state
                setLoading(false); // Stop loading
            })
            .catch(err => {
                setError('Error fetching agent data');
                setLoading(false); // Stop loading on error
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Show loading or error messages while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className='w-full h-[538px] max-w-[258px]  bg-white rounded-[20px] flex flex-col px-5 py-3 gap-1 border-[#F2F2F2] border-[1px]'>
                <h2 className='text-[min(3vw,16px)] text-[#2d2d2d]'>
                    Featured
                </h2>
                <div className='w-full flex flex-col h-full items-center gap-2'>
                    <div className='size-[120px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center'>
                        <img src={agentData.image || testUser} alt='user' className='w-full h-full object-cover' />
                    </div>

                    <div className=' w-fit min-w-[156px] flex items-center h-[24px] border-[#f2f2f2] border-[1px] bg-white rounded-l-full rounded-r-full relative'>
                        <h2 className='text-[min(3vw,12px)] pl-[30px] text-[#2d2d2d] font-medium pr-2'>
                            License No: {agentData.licenseNo.length > 7 ? `${agentData.licenseNo.slice(0, 7)}...` : agentData.licenseNo}
                        </h2>
                        <img src={verifiedIcon} alt='verified' className='w-[30px] h-[30px] absolute -left-2' />
                    </div>

                    <div className='fllex flex-col gap-1 items-center'>
                        <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold text-center'>
                            {agentData.name}
                        </h2>
                        <p className='text-[min(3vw,14px)] text-[#2d2d2d] font-medium text-center'>
                            {agentData.phone.slice(0, 3)}  {agentData.phone.slice(3, 6)} ****
                        </p>

                        <p className='text-[min(3vw,14px)] text-[#2d2d2d] font-medium text-center'>
                            {agentData.email}
                        </p>
                    </div>

                    <div className='w-full flex flex-row items-center justify-center gap-2'>
                        <a href={agentData.fbLink} target='_blank' rel='noreferrer'>
                            <img src={fbIcon} alt='facebook' className='w-[16px] h-[16px]' />
                        </a>
                        <a href={agentData.youtubeLink} target='_blank' rel='noreferrer' className='size-[16px] bg-black flex items-center justify-center rounded-full'>
                            <img src={ytIcon} alt='youtube' className='w-[9px] h-[6px]' />
                        </a>
                        <a href={agentData.linkedInLink} target='_blank' rel='noreferrer'>
                            <img src={inIcon} alt='linkedin' className='w-[16px] h-[16px]' />
                        </a>

                        <a href={agentData.tiktokLink} target='_blank' rel='noreferrer' className='size-[16px] bg-black flex items-center justify-center rounded-full'>
                            <img src={tiktokIcon} alt='tiktok' className='w-[9px] h-[10px]' />
                        </a>
                    </div>

                    {/* Statistics */}
                    <div className='w-full max-w-[176px] flex flex-row gap-7 justify-center items-center p-3 border-[1px] border-[#c0b8b8] rounded-[11px]'>
                        <div className='flex flex-col leading-5'>
                            <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold'>
                                {agentData.totalSold}
                            </h2>
                            <div className='flex flex-row gap-1 items-center'>
                                <img src={checkCircleGreenIcon} alt='check' className='w-[12px] h-[12px]' />
                                <p className='text-[min(3vw,12px)] text-black font-medium'>
                                    Sold
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col leading-5'>
                            <h2 className='text-[min(3vw,24px)] text-[#2d2d2d] font-bold'>
                                {agentData.totalRented}
                            </h2>
                            <div className='flex flex-row gap-1 items-center'>
                                <div className='flex flex-row items-center justify-center size-[12px] rounded-full bg-[#4BAE4F]'>
                                    <img src={eyeIcon} alt='check' className='w-[8px] h-[8px]' />
                                </div>
                                <p className='text-[min(3vw,12px)] text-black font-medium'>
                                    Rented
                                </p>
                            </div>
                        </div>
                    </div>

                    <button 
                    onClick={() => setShowPropertyAppraisalModal(true)}
                    className='w-full text-white text-[12px] font-bold cursor-pointer flex flex-row items-center justify-center bg-[#68BA6B] h-[32px] rounded-l-full rounded-r-full'>
                        Contact Now
                    </button>
                </div>
            </div>
            <PropertyAppraisalModal show={showPropertyAppraisalModal} onClose={() => setShowPropertyAppraisalModal(false)} />
        </>
    )
}

export default AgentCard;
