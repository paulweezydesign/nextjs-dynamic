import kittens from '../../data.json';
import Link from 'next/link';

const KittensPage = () => {
  return (
    <>
      <div>
        <h1>Kittens</h1>
        <ul>
          {kittens.map((kitten) => (
            <li key={kitten.id}>
              <Link href="/kittens/[id]" as={`/kittens/${kitten.id}`}>
                {kitten.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default KittensPage;
