import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Project <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-green-300">LCMR01</span></h1>
        <p className="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400">Low-Cost Camera</p>
        <p className="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400">FastAPI & Next.js</p>

        <div className="w-full text-center">
          <img
            src="http://172.20.10.5:8000/video_feed"
            alt="Pi camera stream"
            className="mx-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.outerHTML = `<div class='text-gray-200 text-center'>Pi camera stream not available</div>`;
            }}
          />
      </div>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jakubstribrny/camerarpi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github Repo
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jakubstribrny/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          By Jakub Stříbrný
        </a>
      </footer>
    </div>
  );
}
