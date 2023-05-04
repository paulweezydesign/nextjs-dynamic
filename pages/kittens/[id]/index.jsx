import { useRouter } from 'next/router';
import Header from '../../../components/header';
import kittens from '../../../data.json';
import Link from 'next/link';

export default function KittenPage() {
  const router = useRouter();
  const { id } = router.query;
  const kitten = kittens.find((kitten) => kitten.id === id);
  if (!kitten) {
    return <h1>Kitten not found</h1>;
  }

  return (
    <>
      <img src={kitten.image2} alt={kitten.name} />
      <h1>{kitten.name}</h1>
      <p>{kitten.description}</p>
      <div>
        <Link href="/kittens">Back to all kittens</Link>
        <Link href="/contact">Contact us</Link>
      </div>
    </>
  );
}
