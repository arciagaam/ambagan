import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Command, CommandItem, CommandList } from '@/components/ui/command'
import { Member } from "../types"
import { CheckIcon } from 'lucide-react'

type ContributorsSelect<T extends Member = Member, K = Pick<T, "id">> = {
  options: T[]
  selected: K[]
  onChange: (...event: any[]) => void
}

export const ContributorsSelect = ({
  options,
  selected,
  onChange,
}: ContributorsSelect) => {
  const toggleValue = (id: string) => {
    const isIncluded = selected.some((member) => member.id === id)
    if (isIncluded) {
      onChange(selected.filter((member) => member.id !== id))
    } else {
      onChange([
        ...selected, {
          id,
          amount: 0
        }
      ])
    }
  }

  const selectedOptions = options.filter((option) => selected.some((member) => option.id === member.id))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selected.length === 0
            ? "Select Contributors"
            : selectedOptions
              .map(option => option.first_name)
              .join(', ')
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[300px]">
        <Command>
          <CommandList>
            {options.map((option) => (
              <CommandItem
                key={option.id}
                onSelect={() => toggleValue(option.id)}
                className="flex items-center justify-between"
              >
                {option.first_name}
                {selected.some((u) => u.id === option.id) && <CheckIcon className="w-4 h-4" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
