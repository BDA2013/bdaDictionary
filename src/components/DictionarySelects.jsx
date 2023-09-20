import {
  Chip,
  Stack,
} from '@mui/material';
import { useDictionary } from '../utils/DictionaryContext';


function DictionarySelects() {

  const { state, setState, active, setActive } = useDictionary();

  return (
    <div>
      <Stack direction='column'>
        {state &&
          state.map((d, index) => (
            <Chip
              color={d._id !== active._id ? "primary" : "secondary"}
              label={d.title}
              key={index}
              onClick={() => {
                setActive(d);
              }}
            />
          ))}
      </Stack>
    </div>
  )
}

export default DictionarySelects