import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-black p-4 rounded-full shadow-lg mx-auto mt-4 w-2/3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="hover:underline">Sobre Mi</a>
              </Link>
            </li>
            <li>
              <Link href="/projects" legacyBehavior>
                <a className="hover:underline">Proyectos</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:underline">Contacto</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}