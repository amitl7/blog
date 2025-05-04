import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A]" />
          <span className="ml-2">Go To Website</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;