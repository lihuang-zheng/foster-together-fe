import { setFamiliesArray, setFamError } from '../slices/famSlice'
import { axiosWithBaseURL } from '../../utils/axios/axiosWithBaseUrl'
import axiosWithAuth from '../../utils/axios/axiosWithAuth'

export const getFamilies = () => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get('/families')
    dispatch(setFamiliesArray(data))
  } catch (e) {
    dispatch(setFamError(e.response.data))
  }
}

export const postFamily = values => async dispatch => {
  try {
    await axiosWithBaseURL().post('/families', values)
  } catch (e) {
    dispatch(setFamError(e.response.data))
  }
}
