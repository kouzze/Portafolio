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
        <h2 className="text-2xl font-semibold mb-4">Sobre Mi</h2>
        <p className="text-black">
          Apasionado por las tecnologías, desarrollo y actualmente me encuentro egresado de mi carrera, por lo que me encuentro buscando oportunidades. Espero te guste mi portafolio.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/project1.jpg"
              alt="Proyecto 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Proyecto 1</h3>
              <p className="text-gray-700">
                <i>Guest Experience</i> es un Sitio Web para gestionar reservas de hoteles utilizando Astro.js y Nest.js como tecnologías principales.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/project2.jpg"
              alt="Proyecto 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Proyecto 2</h3>
              <p className="text-gray-700">
                A mobile app developed using React Native.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/project3.jpg"
              alt="Project Three"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Project Three</h3>
              <p className="text-gray-700">
                An e-commerce platform using Next.js and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p className="text-black">
          Puedes escribirme directamente a mi correo personal: <a href="mailto:nicolasignacio.j.c@gmail.com" className="text-blue-500">nicolasignacio.j.c@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}