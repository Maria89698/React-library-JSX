const myName = 'Maria';
const imgSRC = 'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp';
const imgALT = 'React logo';
const siteInfo = {
  name: 'Google',
  url: 'https://www.google.com/'
};
const num1 = 8;
const num2 = 7;
const sum = num1 + num2;
const colors = [
  "Red",
  "Blue",
  "Yellow"
];

export function App() {
  return (
    <div>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgSRC} alt={imgALT} />
      <a href={siteInfo.url}>{siteInfo.name}</a>
      <p>{sum}</p>
      <ul>
        {colors.map((color) => {
          return <li>{color}</li>
        })}
      </ul>
    </div>
    
  )
}