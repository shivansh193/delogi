import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="absolute inset-0">
      <Image src="/Nav.jpg" alt="Navbar Background" width={1920} height={130}
        objectFit="cover"
        />

      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="w-12 h-12">
                <img src="/Logo.jpg" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center space-x-6 p-4">
          <div className="cursor-pointer">
            <Link href="/consumers">
              <span>Consumers</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/organisation">
              <span>Organisation</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/aboutus">
              <span>About Us</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/contact">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
