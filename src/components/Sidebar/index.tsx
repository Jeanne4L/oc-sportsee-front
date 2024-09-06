import Icons from '../icon'

const { Bodybuilding, Cycling, Swimming, Yoga } = Icons

const Sidebar = () => {
	return (
		<div className='bg-black w-fit flex flex-col justify-center fixed bottom-0 p-s pt-0 top-header-height'>
			<div className='flex flex-col gap-s -translate-y-1/4'>
				<div className='bg-white rounded-sm inline-flex w-10 h-10 flex justify-center items-center'>
					<Yoga />
				</div>
				<div className='bg-white rounded-sm inline-flex w-10 h-10 flex justify-center items-center'>
					<Swimming />
				</div>
				<div className='bg-white rounded-sm inline-flex w-10 h-10 flex justify-center items-center'>
					<Cycling />
				</div>
				<div className='bg-white rounded-sm inline-flex w-10 h-10 flex justify-center items-center'>
					<Bodybuilding />
				</div>
			</div>
			<p className='text-white text-xs absolute bottom-m left-0 -rotate-90 translate-x-1/2 -translate-y-full whitespace-nowrap'>
				Copyright, SportSee 2020
			</p>
		</div>
	)
}

export default Sidebar
