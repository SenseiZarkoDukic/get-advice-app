export default function App() {
  async function getAdvice() {
    await fetch("https://api.adviceslip.com/advice");
    await res
     console.log(res)
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button>Get advice</button>
    </div>
  );
}
