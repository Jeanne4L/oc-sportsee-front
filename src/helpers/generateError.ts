import { AxiosError } from 'axios'

const generateError = (error: AxiosError) => {
	switch (error.status) {
		case 403:
			error.message = "On se connait pas, t'es le remplaçant ?"
			break
		case 404:
			error.message = "Arrête de courir, tu t'es perdu !"
			break
		case 500:
			error.message = 'Serveur en surchauffe'
			break
		default:
			error.message = "Quelque chose ne va pas alors aujourd'hui c'est repos !"
			break
	}

	return error
}

export default generateError
