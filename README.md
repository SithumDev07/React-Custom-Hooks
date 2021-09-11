# Custom Hooks

## useState()

    const [state, setState] = useState(false)
    Simple Use State,
    first one is simple initial state and second one is the modifier

## useInput()

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) {
            setValue(event.target.value);
        }
        return { value, onChange };
    }

    const name = useInput("");

    Then, inside input jsx we can use like,

    <input type="text" value={name.value} onChange={name.onChange}>

    We can simplify this into,

    <input type="text" {...name}>

#### We can customize useInput function in order to get a validator also.

    const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) {

            const {
                target: {value}
            } = event;

            let willChange = true;

            if(typeof validator === 'function') {
                willChange = validator(value);
            }

            if(willChange) {
                setValue(value);
            }

        }
        return { value, onChange };
    }
