const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = () => {
  const Part1 = () => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10

    return (
      <p>{part1} {exercises1}</p>
    )
  }
  const Part2 = () => {
    const part2 = 'Using props to pass data'
    const exercises2 = 7

    return (
      <p>{part2} {exercises2}</p>
    )
  }
  const Part3 = () => {
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
      <p>{part3} {exercises3}</p>

    )
  }


  return (
    <>
      <Part1 />
      <Part2 />
      <Part3 />
    </>

  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;

}

const App = () => {
  const course = 'Half Stack application development';
  return (
    <>
      <Header course={course} />
      <Content />
      <Total />
    </>
  )
}
export default App