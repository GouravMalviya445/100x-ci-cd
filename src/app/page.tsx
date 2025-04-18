import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Happy Birthday Harkirat Singh!</title>
      </Head>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Happy Birthday Harkirat Singh!</h1>
        <p className="text-2xl mb-8">Wishing you a wonderful day filled with love, laughter, and all your favorite things.</p>
        <img src="https://picsum.photos/500/400" alt="Birthday Cake" className="w-64 h-96 mx-auto rounded-lg shadow-md" />
        <p className="text-2xl mt-8">May all your dreams and wishes come true on this special day!</p>
      </div>
    </div>
  );
}
