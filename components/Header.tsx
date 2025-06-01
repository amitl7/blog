import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-blod px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                <Image
                    src="/bloglogo.png"
                    alt="Blog Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            </Link>
            <h1 className='text-2xl'>Self.Wealth.Health</h1>
        </div>
        
        <div>
            {/* //sign up button and link § */}
        </div>
    </header>
  )  
}

export default Header