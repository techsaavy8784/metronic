import { FaLayerGroup } from 'react-icons/fa'
import { SiWindows11 } from 'react-icons/si'
import { HiShoppingBag } from 'react-icons/hi2'
import { BiBarChartAlt } from 'react-icons/bi'
import { BsShieldFillCheck } from 'react-icons/bs'

export const contents = [
  { icon: <FaLayerGroup size={25} />, title1: 'SaaS', title2: 'Application' },
  { icon: <SiWindows11 size={25} />, title1: 'Main', title2: 'Categories' },
  { icon: <HiShoppingBag size={25} />, title1: 'Order', title2: 'Management' },
  { icon: <BiBarChartAlt size={25} />, title1: 'Sales', title2: 'Statistics' },
  {
    icon: <BsShieldFillCheck size={25} />,
    title1: 'Access',
    title2: 'Control',
  },
]
