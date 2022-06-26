import axios from 'axios'

const validate = async () => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  try {
    const res = await axios.get('http://localhost:3000/auth/validate_token', {
      headers: {
        uid: uid,
        'access-token': accessToken,
        client: client
      }
    })

    return res
  } catch (err) {
    console.log(err)
  } 
}

const useValidate = () => {
  return { validate }
}

export default useValidate