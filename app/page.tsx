import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold mt-4">Nicolás Jara</h1>
        <p className="text-xl text-black">Ingeniero Civil en Computación</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-black">
          I am a passionate developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Project One</strong> - A web application built with React and Node.js.
          </li>
          <li className="mb-2">
            <strong>Project Two</strong> - A mobile app developed using React Native.
          </li>
          <li className="mb-2">
            <strong>Project Three</strong> - An e-commerce platform using Next.js and MongoDB.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-black">
          Feel free to reach out to me via email at <a href="mailto:nicolasignacio.j.c@gmail.com" className="text-blue-500">nicolasignacio.j.c@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}