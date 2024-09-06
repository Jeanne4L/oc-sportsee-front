type ButtonProps = {
	label: string
	handleClick: () => void
}

const Button = ({ label, handleClick }: ButtonProps) => {
	return (
		<span
			className='bg-red text-white font-medium text-s rounded-full px-s py-xs w-fit cursor-pointer'
			onClick={handleClick}
		>
			{label}
		</span>
	)
}

export default Button
