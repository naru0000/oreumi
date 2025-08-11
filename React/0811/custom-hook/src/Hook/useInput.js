export default function useInput(initState) {
  const [value, setValue] = useState(initState);

  function onChange() {
    setValue(e.target.value);
  }

  return [value, onChange];
}
