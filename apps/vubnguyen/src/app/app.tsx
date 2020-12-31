import { classnames as cn } from '@vubnguyen/styles';

export function App() {
  return (
    <div className={cn({ dbg: process.env.NODE_ENV === 'development' })}>
      <header />
      <main />
    </div>
  );
}

export default App;
