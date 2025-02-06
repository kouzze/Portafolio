import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
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
  );
};

export default Header;