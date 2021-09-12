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

## useTabs()

    const useTabs(initialTab, allTabs) {
        const [currentIndex, setCurrentIndex] = useState(initialTab);

        if(!allTabs || !Array.isArray(allTabs)) {
            return;
        }

        return {
            currentItem: allTabs[currentIndex],
            changeItem: setCurrentIndex
        }
    }

#### When Updating

    const content = [
        {
            tab: "section1",
            content: "The sound of rain outside when u're in bed is elite"
        },
        {
            tab: "section2",
            content: "I missed the times where Saturdays and Sundays were really considered as rest days"
        }
    ];

    const { currentItem, changeItem } = useTabs(0, content);

    content.map((section, index) => (
        <button onClick={section.setCurrentIndex(index)}>{section.tab}</button>
    ))

## UseEffect()

    There are three states of useEffect Hook
        1. Component Did mount
        2. Component Did update
        3. Component will unmount

    useEffect require two parameters,
        1. Function
        2. Dependencies (type Array)
