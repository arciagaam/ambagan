import { FC } from 'react'
import { Command, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'

type User = {
  id: string
  name: string
}

interface ContributorsSelectProps {
  selected: string[]
  onChange: (value: string[]) => void
  users: User[]
  placeholder?: string
}

export const ContributorsSelect: FC<ContributorsSelectProps> = ({
  selected,
  onChange,
  users,
  placeholder = 'Select contributors'
}) => {
  const toggleValue = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id))
    } else {
      onChange([...selected, id])
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          {selected.length === 0
            ? placeholder
            : users
                .filter((u) => selected.includes(u.id))
                .map((u) => u.name)
                .join(', ')}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[300px]">
        <Command>
          <CommandList>
            {users.map((user) => (
              <CommandItem
                key={user.id}
                onSelect={() => toggleValue(user.id)}
                className="flex items-center justify-between"
              >
                {user.name}
                {selected.includes(user.id) && <CheckIcon className="w-4 h-4" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
