import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps{}

export function Checkbox({}: CheckboxProps){
  return(
    <CheckBox.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      >
        <CheckBox.Indicator asChild>
          <Check weight='bold' className='h-5 w-5 text-cyan-500' />
        </CheckBox.Indicator>
    </CheckBox.Root>
  )
}