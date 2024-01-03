import {publicIpv4} from 'public-ip'
import { api } from './axios';

export const getIp = async (search?: string) => {
  const ip = await publicIpv4({}).then((ip) => ip);
  return await api.get(search || ip).then((res) => res.data);
}
