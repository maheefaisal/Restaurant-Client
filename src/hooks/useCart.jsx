import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user, loading } = useContext(AuthContext)

    // const token = localStorage.getItem('access_token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.json()
        },
    })

    return [cart, refetch]

}
export default useCart;