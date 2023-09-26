import { Duck } from "./demo" // use rtc to create a funtion then import the typescript

interface Props {

    duck: Duck
}


export default function DuckItem({duck}: Props) {
  return (
    <div key={duck.name}>
    <span>{duck.name}</span>
    <button onClick={() => duck.makeSound(duck.name + ' quack')}>MakeSound</button>

    </div>
  )
}
