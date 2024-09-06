import Button from '../../components/Button'
import errorImage from '/error-image.png?url'

type ErrorProps = {
	message: string
	code?: number
}

const refreshPage = () => {
	window.location.reload()
}

const ErrorPage = ({ message, code }: ErrorProps) => {
	return (
		<div className='flex justify-center items-center h-screen'>
			<img
				src={errorImage}
				alt='personne qui court'
				className='h-error-img-height'
			/>
			<div className='flex flex-col gap-xl'>
				<div className='flex flex-col gap-m'>
					{code && (
						<span className='text-xxl leading-error-code font-black'>
							{code}
						</span>
					)}
					<p className='text-base max-w-72'>{message}</p>
				</div>
				<Button label='Rafraîchir la page' handleClick={refreshPage} />
			</div>
		</div>
	)
}

export default ErrorPage
