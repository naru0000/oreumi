function PropsTest(props) {
  return (
    <div>
      <div>{props.name + props.name}</div>
      <div>{props.age + props.age}</div>
    </div>
  );
}

function App() {
  return (
    <PropsTest
      name="PropsTest"
      age={10}
      func={() => console.log(`클릭했음`)}
      image="https://picsum.photos/200/300"
      alt="Random"
    />
  );
}

export default App;
