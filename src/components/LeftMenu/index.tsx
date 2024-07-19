import React from 'react'

import Icons from '../icon'

const { Bodybuilding, Cycling, Swimming, Yoga } = Icons

const LeftMenu = () => {
	return (
		<div className='left-menu bg-black w-fit flex flex-col justify-center fixed bottom-0 p-m pt-0'>
			<div className='left-menu__options flex flex-col gap-s'>
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
			<p className='copyright text-white text-xs absolute bottom-m left-0'>
				Copyright, SportSee 2020
			</p>
		</div>
	)
}

export default LeftMenu
